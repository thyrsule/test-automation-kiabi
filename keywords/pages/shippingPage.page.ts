import { Page, test } from "@playwright/test";
import ShippingPageLocators from "@keywords/locators/shippingPage.locators";
import { DeliveryChannelSelection } from "@common/data/shipping_data";
import { CustomerRepresentation } from "@common/data/customer_data";

export default class ShippingPage {
  page: Page;
  shippingPageLocators: ShippingPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.shippingPageLocators = new ShippingPageLocators(page);
  }

  /**
   * Fill the postal code field
   * @author TEAM_FRONT
   */
  public async fillPostalCode(customerData: CustomerRepresentation) {
    await test.step("Fill postal code field", async () => {
      await this.shippingPageLocators.inputZipCode().fill(customerData.zipCode);
      await this.shippingPageLocators.buttonSubmitPostalCode().click();
    });
  }

  /**
   * Select a shipping method
   * @param {DeliveryChannelSelection} shippingMethod Shipping method
   * @author TEAM_FRONT
   */
  public async selectShippingMethod(shippingMethod: DeliveryChannelSelection) {
    await test.step(`Select a shipping method ${shippingMethod}`, async () => {
      switch (shippingMethod) {
        case DeliveryChannelSelection.HOME:
          await this.shippingPageLocators
            .buttonSelectHomeShippingMethod()
            .click();
          await this.shippingPageLocators.buttonHomeShippingOption().click();
          break;
        case DeliveryChannelSelection.RELAY:
          // Select Relay Shipping Option
          break;
        case DeliveryChannelSelection.STORE:
          // Select Store Shipping Option
          break;
        default:
          await this.shippingPageLocators
            .buttonSelectHomeShippingMethod()
            .click();
          await this.shippingPageLocators.buttonHomeShippingOption().click();
          break;
      }
    });
  }

  /**
   * Fill the shipping form
   * @param {CustomerRepresentation} customerData Customer informations
   * @author TEAM_FRONT
   */
  public async fillShippingForm(customerData: CustomerRepresentation) {
    await test.step(`Fill the last name field with ${customerData.lastName}`, async () => {
      await this.shippingPageLocators
        .inputLastName()
        .fill(customerData.lastName);
    });

    await test.step(`Fill the first name field with ${customerData.firstName}`, async () => {
      await this.shippingPageLocators
        .inputFirstName()
        .fill(customerData.firstName);
    });

    await test.step(`Fill the address field with ${customerData.address}`, async () => {
      await this.shippingPageLocators.inputAddress().fill(customerData.address);
    });

    await test.step(`Fill the city field with ${customerData.city}`, async () => {
      await this.shippingPageLocators.inputCity().fill(customerData.city);
    });

    await test.step(`Validate the shipping form`, async () => {
      await this.shippingPageLocators.buttonSubmitShippingForm().click();
    });

    await test.step(`Fill mobile phone field with ${customerData.phone}`, async () => {
      await this.shippingPageLocators.inputPhone().fill(customerData.phone);
    });

    await test.step(`Open billing form`, async () => {
      await this.shippingPageLocators.buttonCompleteBillingForm().click();
    });

    await test.step(`Fill the birthdate field with ${customerData.birthdate}`, async () => {
      await this.shippingPageLocators
        .inputBirthdate()
        .fill(customerData.birthdate);
    });

    await test.step(`Fill the email field with ${customerData.email}`, async () => {
      await this.shippingPageLocators.inputEmail().fill(customerData.email);
    });

    await test.step("Validate the billing form", async () => {
      await this.shippingPageLocators.buttonValidateBillingForm().click();
    });

    await test.step("Confirm the shipping address", async () => {
      if (process.env.CURRENT_ENV === "fr") {
        await this.shippingPageLocators
          .buttonConfirmShippingAddress()
          .click({ timeout: 2000 });
      }
    });

    await test.step("Confirm the billing address", async () => {
      if (
        await this.shippingPageLocators
          .buttonValidateShippingCheckoutStep()
          .isVisible()
      ) {
        await this.shippingPageLocators
          .buttonValidateShippingCheckoutStep()
          .click();
      }
    });
  }
}

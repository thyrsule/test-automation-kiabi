import { Page } from "@playwright/test";

export default class ShippingPageLocators {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  buttonSubmitPostalCode = () =>
    this.page.getByTestId("postalCode_button_validate");
  buttonSubmitShippingForm = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_button_validate`
    );
  buttonCompleteBillingForm = () =>
    this.page.getByTestId("billingCard_section_complete");
  buttonValidateBillingForm = () =>
    this.page.getByTestId(
      `billingForm${process.env.CURRENT_ENV!.toUpperCase()}_button_validate`
    );
  buttonSelectHomeShippingMethod = () =>
    this.page.getByTestId("deliveryChoices_radio_shippingHome");
  buttonHomeShippingOption = () =>
    this.page.getByTestId("shippingCartDeliveryOptions_label_HOME");
  buttonConfirmShippingAddress = () =>
    this.page.locator('//span[contains(@class, "jmfnBJ")]');

  buttonValidateShippingCheckoutStep = () =>
    this.page.getByTestId("shippingStep_button_validate");

  inputZipCode = () => this.page.getByTestId("postalCode_input_postalCode");
  inputLastName = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_input_lastName`
    );
  inputFirstName = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_input_firstName`
    );
  inputAddress = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_input_addressLine1`
    );
  inputAdress2 = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_input_addressLine2`
    );
  inputCity = () =>
    this.page.getByTestId(
      `homeAddressForm${process.env.CURRENT_ENV!.toUpperCase()}_input_city`
    );
  inputPhone = () => this.page.getByTestId("mobileForm-mobile");
  inputEmail = () =>
    this.page.getByTestId(
      `billingForm${process.env.CURRENT_ENV!.toUpperCase()}_input_email`
    );
  inputBirthdate = () =>
    this.page.getByTestId(
      `billingForm${process.env.CURRENT_ENV!.toUpperCase()}_input_birthDate`
    );
}

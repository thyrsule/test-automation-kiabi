import { expect, Page, test } from "@playwright/test";
import CheckoutPageLocators from "@keywords/locators/checkoutPage.locators";

export default class CheckoutPage {
  page: Page;
  checkoutPageLocators: CheckoutPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.checkoutPageLocators = new CheckoutPageLocators(page);
  }

  /**
   * Skip the loyalty step in the checkout funnel
   * @author TEAM_FRONT
   */
  public async skipLoyaltyStep() {
    await test.step("Skip the loyalty step in the checkout funnel", async () => {
      await this.checkoutPageLocators.buttonSkipLoyaltyStep().click();
    });
  }

  public async verifyOrderTotalAmount(productPrice: number) {
    await test.step("Verify order total amount", async () => {
      const deliveryFeeAmount = parseFloat(
        await this.checkoutPageLocators.divDeliveryFeesAmount()
      );
      const orderTotalAmount = parseFloat(
        await this.checkoutPageLocators.divOrderTotalAmount()
      );
      expect(orderTotalAmount).toEqual(deliveryFeeAmount + productPrice);
    });
  }
}

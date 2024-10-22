import { Page, test } from "@playwright/test";
import CartPageLocators from "@keywords/locators/cartPage.locators";

export default class CartPage {
  page: Page;
  cartPageLocators: CartPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.cartPageLocators = new CartPageLocators(page);
  }

  /**
   * Validate the cart
   * @author TEAM_FRONT
   */
  public async validateCart() {
    await test.step("Validate the cart", async () => {
      await this.cartPageLocators.buttonValidateCart().click();
    });
  }
}

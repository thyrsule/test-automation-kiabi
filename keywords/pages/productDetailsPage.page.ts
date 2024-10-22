import { Page, test } from "@playwright/test";
import ProductDetailsPageLocators from "@keywords/locators/productDetailsPage.locators";

export default class ProductDetailsPage {
  page: Page;
  productDetailsPageLocators: ProductDetailsPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.productDetailsPageLocators = new ProductDetailsPageLocators(page);
  }

  /**
   * Launch a search
   * @author TEAM_FRONT
   */
  public async addToCart() {
    await test.step(`Add to cart the product from the details page`, async () => {
      await this.productDetailsPageLocators.buttonAddToCart().click();
    });
  }

  /**
   * Select a product size
   */
  public async selectProductSize() {
    await this.productDetailsPageLocators.buttonSelectSize().first().click();
  }

  public async viewCart() {
    await test.step("View cart", async () => {
      await this.productDetailsPageLocators.buttonViewCart().click();
    });
  }
}

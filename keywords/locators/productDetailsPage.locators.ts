import { Page } from "@playwright/test";

export default class ProductDetailsPageLocators {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  buttonAddToCart = () =>
    this.page.getByTestId("productInformation_button_addToCart");
  buttonSelectSize = () => this.page.getByTestId("productSize_li_sizeSold");
  buttonViewCart = () =>
    this.page.getByTestId("cartConfirmationDrawer_button_seeCart");
}

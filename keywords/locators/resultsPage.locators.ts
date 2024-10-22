import { Page } from "@playwright/test";

export default class ResultsPageLocators {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  linkProductName = (productName: string) =>
    this.page.getByRole("link", { name: productName, exact: true });
  buttonClosePopIn = () =>
    this.page.getByRole("button", { name: "Close dialog" }).first();
}

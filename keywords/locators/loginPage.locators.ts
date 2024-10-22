import { Page } from "@playwright/test";

export default class LoginPageLocators {
  page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  buttonContinueAsGuest = () =>
    this.page.getByTestId("accountInfosAuthEmailUnknownDrawer_button_TMI");
}

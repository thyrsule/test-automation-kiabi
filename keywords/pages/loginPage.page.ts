import { Page, test } from "@playwright/test";
import LoginPageLocators from "@keywords/locators/loginPage.locators";

export default class LoginPage {
  page: Page;
  loginPageLocators: LoginPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.loginPageLocators = new LoginPageLocators(page);
  }

  /**
   * Continue the checkout as a guest
   * @author TEAM_FRONT
   */
  public async continueAsGuest() {
    await test.step("Continue the checkout as a guest", async () => {
      await this.loginPageLocators.buttonContinueAsGuest().click();
    });
  }
}

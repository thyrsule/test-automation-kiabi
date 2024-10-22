import { Page, test } from "@playwright/test";
import HomePageLocators from "@keywords/locators/homepage.locators";

export default class HomePage {
  page: Page;
  homePageLocators: HomePageLocators;

  constructor(page: Page) {
    this.page = page;
    this.homePageLocators = new HomePageLocators(page);
  }

  /**
   * Go to home page
   * @author TEAM_FRONT
   */
  public async goToHomePage() {
    await test.step("Go to home page", async () => {
      await this.page.goto("/");
    });
  }

  public async acceptCookies() {
    await test.step("Accept cookies", async () => {
      await this.homePageLocators.buttonAcceptCookies().click();
    });
  }
}

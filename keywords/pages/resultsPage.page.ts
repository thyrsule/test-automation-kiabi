import { Page, test } from "@playwright/test";
import ResultsPageLocators from "@keywords/locators/resultsPage.locators";

export default class ResultsPage {
  page: Page;
  resultsPageLocators: ResultsPageLocators;

  constructor(page: Page) {
    this.page = page;
    this.resultsPageLocators = new ResultsPageLocators(page);
  }

  /**
   * View product details
   * @param {string} productName Product selected
   * @author TEAM_FRONT
   *
   */
  public async viewProductDetails(productName: string) {
    await test.step(`View product details of ${productName}`, async () => {
      await this.resultsPageLocators
        .linkProductName(productName)
        .first()
        .click();
    });

    try {
      await test.step("Wait for pop-in display", async () => {
        await this.page.waitForSelector(
          ".ab_widget_container_popin-image_close_button",
          { timeout: 5000 }
        );
      });
      await test.step("Close pop-in", async () => {
        await this.resultsPageLocators.buttonClosePopIn().click();
      });
    } catch (error) {
      console.log("No pop-in to close");
    }
  }
}

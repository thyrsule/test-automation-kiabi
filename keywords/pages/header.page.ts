import { Page, test } from "@playwright/test";
import HeaderLocators from "@keywords/locators/header.locators";
import { SearchRepresentation } from "@common/data/search_data";

export default class HeaderPage {
  page: Page;
  headerLocators: HeaderLocators;

  constructor(page: Page) {
    this.page = page;
    this.headerLocators = new HeaderLocators(page);
  }

  /**
   * Launch a search
   * @param {string} keyword Keyword used for the search
   * @author TEAM_FRONT
   */
  public async launchSearch(keyword: string) {
    await test.step("Launch a search", async () => {
      await this.headerLocators.inputSearchBar().fill(keyword);
      await this.page.keyboard.press("Enter");
    });

    const response = await test.step("Wait for search results", async () => {
      return await this.page.waitForResponse(new RegExp("/graphql"));
    });

    return (await response.json()) as SearchRepresentation;
  }
}

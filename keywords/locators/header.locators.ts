import { Page } from "@playwright/test";

export default class HeaderLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    inputSearchBar = () => this.page.locator('//input[contains(@class, "headerSearch_searchInputInput__95BSv")]');

}
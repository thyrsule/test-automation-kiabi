import { Page } from "@playwright/test";

export default class HomePageLocators {
    page: Page;

    constructor(page: Page) {
        this.page = page
    }

    buttonAcceptCookies = () => this.page.locator('#popin_tc_privacy_button');
}
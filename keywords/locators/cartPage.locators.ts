import { Page } from "@playwright/test";

export default class CartPageLocators {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    buttonValidateCart = () => this.page.getByTestId("invoiceDetailsCard_button_validateCart");
}
import { Page } from "@playwright/test";

export default class CheckoutPageLocators {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    buttonSkipLoyaltyStep = () => this.page.getByTestId("loyaltyStep_button_goNextStep");
    divDeliveryFeesAmount = () => this.page.getByTestId("cartInvoiceDetails_div_deliveryFees_price").innerText();
    divOrderTotalAmount = () => this.page.getByTestId("cartInvoiceDetails_div_total_price").innerText();
}
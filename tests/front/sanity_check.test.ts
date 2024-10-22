import { test } from "@playwright/test";
import HomePage from "@keywords/pages/homepage.page";
import HeaderPage from "@keywords/pages/header.page";
import { SEARCH_KEYWORD } from "@common/data/search_data";
import ResultsPage from "@keywords/pages/resultsPage.page";
import ProductDetailsPage from "@keywords/pages/productDetailsPage.page";
import LoginPage from "@keywords/pages/loginPage.page";
import CartPage from "@keywords/pages/cartPage.page";
import ShippingPage from "@keywords/pages/shippingPage.page";
import { DeliveryChannelSelection } from "@common/data/shipping_data";
import { CUSTOMER_DATA } from "@common/data/customer_data";
import CheckoutPage from "@keywords/pages/checkoutPage.page";

test("Check user journey", async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const homePage = new HomePage(page);
  const resultsPage = new ResultsPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const shippingPage = new ShippingPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.goToHomePage();
  await homePage.acceptCookies();
  const searchResults = await headerPage.launchSearch(SEARCH_KEYWORD);
  await resultsPage.viewProductDetails(
    searchResults.data.products.items[0].productLabel
  );
  await productDetailsPage.addToCart();
  await productDetailsPage.selectProductSize();
  await productDetailsPage.viewCart();
  await cartPage.validateCart();
  await loginPage.continueAsGuest();
  await shippingPage.fillPostalCode(CUSTOMER_DATA);
  await shippingPage.selectShippingMethod(DeliveryChannelSelection.HOME);
  await shippingPage.fillShippingForm(CUSTOMER_DATA);
  await checkoutPage.skipLoyaltyStep();
  await checkoutPage.verifyOrderTotalAmount(
    searchResults.data.products.items[0].display.price.salePrice
  );
});

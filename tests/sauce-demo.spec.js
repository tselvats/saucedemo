// @ts-nocheck
import { test, expect } from '@playwright/test';
const LoginPage = require("../pages/loginPage");
const ProductsPage = require("../pages/productsPage");
const CartPage = require("../pages/cartPage");


test('Add highest priced item to cart and verify if the correct item is added to cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');
    await expect(page).toHaveTitle(/Swag Labs/);

    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication();
    
    const productsPage = new ProductsPage(page);
    let highestPricedProduct = await productsPage.addHighestPriceItemToCart();
    
    const cartPage = new CartPage(page);
    await cartPage.validateTheCart(highestPricedProduct);

    await loginPage.logoutToApplication();
  
});


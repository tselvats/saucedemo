import {expect } from '@playwright/test';
class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.addedProductName = '[data-test="item-5-title-link"]';
        this.addedProductPrice = '[data-test="inventory-item-price"]';
        this.viewShoppingCart = '[data-test="shopping-cart-link"]';
    }

    async validateTheCart(highestPricedProduct)
    {
        await this.page.locator(this.viewShoppingCart).click();
        await expect(this.page.locator(this.addedProductName)).toHaveText(highestPricedProduct.name);
        await expect(this.page.locator(this.addedProductPrice)).toHaveText("$"+highestPricedProduct.price);
        await this.page.waitForTimeout(1000);
        await this.page.screenshot({path : './test-results/screenshot/CartPage.png', fullPage: true });

    }
}

module.exports=CartPage;
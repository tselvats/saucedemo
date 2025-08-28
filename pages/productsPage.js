class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productList = '.inventory_item_description';
  }
  async addHighestPriceItemToCart() {
    const products = await this.page.$$eval(this.productList, productElements => {
      return productElements.map(el => {
        const name = el.querySelector('.inventory_item_name')?.textContent?.trim();
        const priceText = el.querySelector('.inventory_item_price')?.textContent?.trim();

        // @ts-ignore
        const price = parseFloat(priceText?.replace(/[^0-9.]/g, '')) || 0;
        return { name, price };
      });
    });

    const highestPricedProduct = await products.reduce((max, product) => {
      return product.price > max.price ? product : max;
    }, { name: '', price: 0 });

    await this.page.screenshot({path : './test-results/screenshot/ProductsPage.png', fullPage: true });
    await this.page.locator("xpath=//div[contains(text(),'" + highestPricedProduct.name + "')]/following::button[1]").click();
    return highestPricedProduct;
  }
}
module.exports = ProductsPage;
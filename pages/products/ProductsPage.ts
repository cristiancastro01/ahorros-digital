import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class ProductsPage extends BasePage {
  private productList = '.product-card';

  constructor(page: Page) {
    super(page);
  }

  async getProductsCount() {
    return this.page.locator(this.productList).count();
  }

  async isProductListVisible() {
    return this.page.isVisible(this.productList);
  }
}

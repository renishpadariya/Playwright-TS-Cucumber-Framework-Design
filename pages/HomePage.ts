import { Page, Locator } from "@playwright/test";

export class HomePage {
  private page: Page;
  private productPageTitle: Locator;
  private inventoryItems: Locator;

  
  private maxIndex: number | null = null;
  private maxPrice: number | null = null;

  constructor(page: Page) {
    this.page = page;
    this.productPageTitle = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
  }

  get visible_product_page() {
    return this.productPageTitle;
  }

  async find_highest_price_item() {
    const count = await this.inventoryItems.count();

    let highestPrice = 0;
    let highestIndex = 0;

    for (let i = 0; i < count; i++) {
      const item = this.inventoryItems.nth(i);

      const priceText = await item
        .locator('.inventory_item_price')
        .innerText();

      const price = parseFloat(priceText.replace('$', ''));

      
      if (price > highestPrice) {
        highestPrice = price;
        highestIndex = i;
      }
    }

    this.maxPrice = highestPrice;
    this.maxIndex = highestIndex;

    console.log('Highest price selected:'+ this.maxPrice);
  }

   async add_selected_item_to_cart() {
    if (this.maxIndex === null) {
      throw new Error(
        'Highest price item not selected. Call find_highest_price_item() first.'
      );
    }

    await this.inventoryItems
      .nth(this.maxIndex)
      .locator('button:has-text("Add to cart")')
      .click();

    console.log('Added item with price '+ this.maxPrice + ' to cart');
  }
}

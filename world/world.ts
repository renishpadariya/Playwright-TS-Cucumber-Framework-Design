import { setWorldConstructor, World } from '@cucumber/cucumber';
import {Browser,BrowserContext,Page,chromium,firefox,webkit} from '@playwright/test';
import { ENV } from '../config/env';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  maxIndex?: number;
  maxPrice?: number;
  scenarioName?: string;

  async launchBrowser() {
    switch (ENV.browser.toLowerCase()) {
      case 'firefox':
        this.browser = await firefox.launch({
          headless: ENV.headless,
        });
        break;

      case 'webkit':
        this.browser = await webkit.launch({
          headless: ENV.headless,
        });
        break;

      default:
        this.browser = await chromium.launch({
          headless: ENV.headless,
        });
        break;
    }

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);

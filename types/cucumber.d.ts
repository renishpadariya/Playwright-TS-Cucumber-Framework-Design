// types/cucumber.d.ts
import '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

declare module '@cucumber/cucumber' {
  interface World {
    browser: Browser;
    context: BrowserContext;
    page: Page;

    maxIndex?: number;
    maxPrice?: number;
  }
}

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['allure-playwright'],
  ],
  
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
  },
});




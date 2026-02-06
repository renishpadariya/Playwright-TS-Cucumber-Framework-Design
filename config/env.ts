import 'dotenv/config';

export const ENV = {
  baseUrl: process.env.BASE_URL || '',
  username: process.env.SAUCE_USERNAME || '',
  password: process.env.SAUCE_PASSWORD || '',
  browser: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS !== 'false',
};


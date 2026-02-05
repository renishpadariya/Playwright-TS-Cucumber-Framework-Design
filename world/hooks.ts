import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld, scenario) {
    await this.launchBrowser();

    });

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');
  }
  await this.closeBrowser();
});






import { Locator, Page } from '@playwright/test';
import { HomePage } from './HomePage';

export class LoginPage {
  private usernameinput: Locator;
  private passwordinput: Locator;
  private loginBtn: Locator;

  constructor(private page: Page) {
    this.usernameinput = page.getByPlaceholder('Username');
    this.passwordinput = page.getByPlaceholder('Password');
    this.loginBtn = page.locator('[data-test="login-button"]');
  }

  async launch_url(url: string) {
    await this.page.goto(url);
  }

  async enter_username(username: string) {
    await this.usernameinput.fill(username);
  }

  async enter_password(password: string) {
    await this.passwordinput.fill(password);
  }

  async click_login_btn(): Promise<HomePage> {
    await Promise.all([
      //this.page.waitForURL('**/inventory.html'),
      this.loginBtn.click(),
    ]);

    return new HomePage(this.page);
  }
}

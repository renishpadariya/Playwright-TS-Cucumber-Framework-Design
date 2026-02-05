import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/world';
import {LoginPage} from '../pages/LoginPage';
import { ENV } from '../config/env';
import { HomePage } from "../pages/HomePage";
import { expect } from '@playwright/test';
let loginpage:LoginPage;
let homepage:HomePage;

Given('user is on login page', async function () {
  loginpage=new LoginPage(this.page!);
  await loginpage.launch_url(ENV.baseUrl);

});

When('user enters valid username', async function () {
  await loginpage.enter_username(ENV.username);
  console.log('USERNAME FROM ENV:', ENV.username);


});

When('user enters valid password', async function () {
  
   await loginpage.enter_password(ENV.password);
  
});

When('user clicks on Login button', async function () {

homepage = await loginpage.click_login_btn();
});

Then('user should see products on the page', async function () {
  await expect(homepage.visible_product_page).toHaveText("Products");
});
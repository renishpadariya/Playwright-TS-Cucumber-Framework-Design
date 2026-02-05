import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../world/world";
import { HomePage } from "../pages/HomePage";

let homePage: HomePage;

When('user selects the highest price item', async function () {
  homePage = new HomePage(this.page);
  await homePage.find_highest_price_item();
});

Then('user adds the selected item to the cart', async function () {
  await homePage.add_selected_item_to_cart();
});

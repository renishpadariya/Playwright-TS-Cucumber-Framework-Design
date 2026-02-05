Feature: Home page feature
Background:
Given user is on login page
When user enters valid username
And user enters valid password
And user clicks on Login button

Scenario: Select the highest price item and add it to the cart
When  user selects the highest price item
Then  user adds the selected item to the cart
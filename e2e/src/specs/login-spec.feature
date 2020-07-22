Feature: Increment the counter
    This feature lets a user increment the counter by clicking on the button.

Scenario: Basic increment scenario
    Given I am on the login page
    When I fill username input with "puzansakya"
    When I fill password input with "password"
    When I click on login button
    Then I should be redirected to home page
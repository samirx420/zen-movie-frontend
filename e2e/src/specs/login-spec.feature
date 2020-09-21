Feature: Login Feature
    This feature lets a user to login to the system.

Scenario: Basic login scenario
    Given I am on the login page
    When I fill username input with "puzansakya"
    When I fill password input with "password"
    When I click on login button
    Then I should be redirected to home page
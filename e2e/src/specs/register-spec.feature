Feature: Register Feature
    This feature lets a user to register in to the system.

Scenario: Basic register scenario
    Given I am on the register page
    When I fill first name input with "puzan"
    When I fill last name input with "sakya"
    When I fill username input with "puzansakya1" for registration
    When I fill password input with "password" for registration
    When I click on register button
    Then I should be redirected to home page for registration
// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { RegisterPage } from "../register.po";
import { element, by, browser } from "protractor";
import { expect } from "chai";
import { protractor } from 'protractor/built/ptor';

let page: RegisterPage;

Before(() => {
  page = new RegisterPage();
});

Given("I am on the register page", async () => {
  // Navigate to home page.
  await page.navigateTo();
});

When("I fill first name input with {string}", async (x: string) => {
  element(by.id('first_name')).sendKeys(x);
});

When("I fill last name input with {string}", async (x: string) => {
  element(by.id('last_name')).sendKeys(x);
});

When("I fill username input with {string} for registration", async (x: string) => {
  element(by.id('username')).sendKeys(x);
});

When("I fill password input with {string} for registration", async (x: string) => {
  element(by.id('password')).sendKeys(x);
});

When("I click on register button", async () => {
  // Click on the increment button x times.
  const btnLogin = element(by.id("btnRegister"));
  await btnLogin.click();

});

Then("I should be redirected to home page for registration", async () => {
  expect(
    browser.wait(
      protractor.ExpectedConditions.urlContains("/"), 5000
    ).catch(() => { return false })
  );
});

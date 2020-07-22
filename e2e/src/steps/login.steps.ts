// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by, browser } from "protractor";
import { expect } from "chai";
import { protractor } from 'protractor/built/ptor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given("I am on the login page", async () => {
  // Navigate to home page.
  await page.navigateTo();
});

When("I fill username input with {string}", async (x: string) => {
  element(by.id('username')).sendKeys(x);
});

When("I fill password input with {string}", async (x: string) => {
  element(by.id('password')).sendKeys(x);
});

When("I click on login button", async () => {
  // Click on the increment button x times.
  const btnLogin = element(by.id("btnLogin"));
  await btnLogin.click();

});

Then("I should be redirected to home page", async () => {
  expect(
    browser.wait(
      protractor.ExpectedConditions.urlContains("/"), 5000
    ).catch(() => { return false })
  );
});

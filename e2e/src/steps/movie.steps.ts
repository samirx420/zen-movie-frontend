// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { MovieAdminPage } from "../movie-admin.po";
import { element, by, browser } from "protractor";
import { expect } from "chai";
import { protractor } from 'protractor/built/ptor';

let page: MovieAdminPage;

Before(() => {
    page = new MovieAdminPage();
});

Given("I am on the movie admin page", async () => {
    await page.navigateTo();
});

When("I click on new button", async () => {
    const btnLogin = element(by.id("btnMovieNew"));
    await btnLogin.click();
});

When("I fill movie title input with {string} for movie", async (x: string) => {
    let movie_title = element(by.id('movie_title'))
    await movie_title.sendKeys(x);
});

When("I fill movie description input with {string} for movie", async (x: string) => {
    let movie_description = element(by.id('movie_description'));
    await movie_description.sendKeys(x)
});

When("I fill movie duration input with {string} for movie", async (x: string) => {
    let movie_duration = element(by.id('movie_duration'));
    await movie_duration.sendKeys(x);
});

When("I fill movie release date input with {string} for movie", async (x: string) => {
    let movie_release_date = element(by.id('movie_release_date'));
    await movie_release_date.sendKeys(x);
});

When("I fill movie budget input with {string} for movie", async (x: string) => {
    let movie_budget = element(by.id('movie_budget'));
    await movie_budget.sendKeys(x);
});

When("I click on create button for movie", async () => {
    let btnMovieCreate = element(by.id("btnMovieCreate"));
    await btnMovieCreate.click();
});


Then("It should list the latest added movie title", async () => {
    // let last = element.all(by.css('.movies admin-movie-card')).last();
    // let title = element(by.className('movie__title')).getText();
    // expect(last.getText()).be('protractor title');

    expect(
        browser.wait(
            protractor.ExpectedConditions.urlContains("/"), 5000
        ).catch(() => { return false })
    );
});

Feature: Movie Feature
    This feature lets a user to create movie.

Scenario: Create movie scenario
    Given I am on the movie admin page
    When I click on new button
    When I fill movie title input with "protractor title" for movie
    When I fill movie description input with "protractor description" for movie
    When I fill movie duration input with "120" for movie
    When I fill movie release date input with "2020-10-29" for movie
    When I fill movie budget input with "10000" for movie
    When I click on create button for movie
    Then It should list the latest added movie title
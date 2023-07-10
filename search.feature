Feature: Search feature in Application

    As a user
    I want to search into application

    Scenario: Search Result is found
        Given I open the website page
        When I submit text into field Search
        Then I should see the Search Results
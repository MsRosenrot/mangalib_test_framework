Feature: Interaction with Title
Background:
Given I navigate to https://mangalib.me/basara

Scenario: Check that user is able to add title to collection
When I login with valid credentials
When I add manga to Читаю list
When I go to My Profile page
Then I expect manga to be added to Читаю list


Scenario: Check that user is able to rate title
When I rate title 9 points
Then I expect element button.button_sm.button_white to have attribute class with value is-rated


Scenario: Check that user is able to add/delete comment

When I go to Comments section on manga details page
When I add comment with text "test"
Then I expect comment with text "test" to be displayed
When I delete comment with text "test"
Then I expect comment with text "test" to not be displayed

Scenario: Check that user is able to upvote 'Related' title
When I upvote related title
Then I expect votes count to go up by 1

Scenario: Check that user is able to downvote 'Related' title

When I downvote related title
Then I expect votes count to go down by 1
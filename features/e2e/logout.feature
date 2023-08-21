Feature: Log Out

  Background: 
  Given I login with <username> and <password>

  Scenario Outline: As a user, I can log out of my account 

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
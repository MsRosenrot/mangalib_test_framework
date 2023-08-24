Feature: Log In

Background:
  Given I navigate to https://mangalib.me/
  Then I login with valid credentials

  Scenario: Check log that user can log out
  Given I log out
  Then I expect user to be logged out of the account
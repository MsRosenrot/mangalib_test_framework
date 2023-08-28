Feature: Log Out

Background:
  Given I navigate to https://mangalib.me/
  Then I login with valid credentials

  Scenario: Check that user can log out
  Given I log out
  Then I expect user to be logged out of the account
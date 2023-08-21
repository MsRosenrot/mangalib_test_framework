Feature: UI, Menu tabs and Main Page Sections

  Background: 
  Given I login with <username> and <password>

# Check that user is able to change theme to dark 
# Check that menu contains tabs (parameterized: Mangalib tab, main menu tabs, ... tabs)
# Check that Main Page has sections (parameterized: Обновления популярной манги, Последние новости, Последние темы форума, Новые главы, Side menu)
# Check that sidemenu disappears when device has width of the mobile

  Scenario Outline: As a user, I can log out of my account 

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
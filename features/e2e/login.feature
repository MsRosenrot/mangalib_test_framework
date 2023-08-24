Feature: Log In

Background:
  Given I navigate to https://mangalib.me/

  Scenario: Check log in with invalid credentials: 'Неверный логин или пароль' error appears
  Given I login with login:invalid_login and password:invalid_password
  Then I expect error message text to be "Неверный логин или пароль"

Scenario: Check that user can log in with valid credentials
  Given I login with login:aleksagusarova@mail.ru and password:MangaTest29
  Then I expect to be logged in
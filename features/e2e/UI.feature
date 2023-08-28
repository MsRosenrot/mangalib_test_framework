Feature: UI, Menu tabs and Main Page Sections

  Background: 
  Given I navigate to https://mangalib.me/

  Scenario: Check that user is able to change color theme to dark 

    Given I click change color theme button
    Then I expect background color to be dark

  Scenario Outline: Check that Main Menu tabs are displayed correctly 

    Then I expect Main Menu to contain element: <Tab>

    Examples:
    | Tab      |
    | Каталог  |
    | Поиск    |
    | Форум    |
    | FAQ      |
    | Новости  |
    | Контакты |
    | Рандом   |

  Scenario Outline: Check that Main Page center sections are displayed correctly

    Then I expect Main Page to contain section: <Section>

    Examples:
    | Section                      |
    | Обновления популярной манги  |
    | Последние новости            |
    | Последние темы форума        |
    | Новые главы                  |

  Scenario: Check that sidemenu isn't displayed on mobile device
    Given I open site on mobile
    Then I expect element .aside__content to not be displayed
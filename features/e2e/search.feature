Feature: Search By Manga Title  

Background:
  Given I navigate to https://mangalib.me/

  Scenario: Check that Searchbar placeholder is Поиск Манги
    Given I click '#search-link' element 
    Then I expect '.search__input' element placeholder to equal: 'Поиск Манги'

  Scenario Outline: Check that user is able to search by Manga title: <Title>
    Given I search for Manga: <Title>
    When I click '.search__suggestions-wrap a:first-child' element
    Then I expect page title to contain <Text>

  Examples:

  | Title     | Text   |
  | босс      | босс   |
  | зима      | зима   |

  Scenario: Check that 'Ничего не найдено' text is displayed when no search matches are found
   Given I search for Manga: this is gibberish
   Then I expect search error message text to be "Ничего не найдено"
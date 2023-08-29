Feature: Navigation outside and within site

Background:
  Given I navigate to https://mangalib.me/

  Scenario Outline: Check that user is able to navigate to <Domain> site domain
    Given I navigate at different domain: <Domain>
    Then I expect <Domain> site url to contain text: <Text>

  Examples:

  | Domain     | Text         |
  | RanobeLib  | ranobelib.me |
  | AnimeLib   | animelib.me  |

Scenario Outline: Check that user is able to navigate to <Tab> tab
    Given I click main menu tab: <Tab>
    Then I expect <Tab> site url to contain text: <Text>

Examples:
  | Tab        | Text  |
  | Forum      | forum |
  | FAQ        | faq   |

  Scenario Outline: Check that user is able to open a Popular Manga (№ <number> in list) from Main Page
    Given I select Popular Manga poster №<number>
    Then I expect page title to contain selected manga name

Examples:
| number |
| 3      |
| 0      |

    Scenario: Check that user is able to open News page from Main Page
    Given I open News page from Main Page
    Then I expect page title to be "Новости" 
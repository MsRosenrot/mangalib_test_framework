Feature: Reading manga title

Scenario: Check that user is able to open manga
Given I start reading title https://mangalib.me/basara?section=info
Then I expect Reader mode page to open

Scenario Outline: Check that user is able to navigate chapters
Given I start reading title https://mangalib.me/basara?section=info
When I navigate chapters: <number> chapters forward
Then I expect site url to contain text: <url>

Examples:
| number | url |
| 2      | c3  |
| 4      | c5  |
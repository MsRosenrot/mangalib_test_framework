Feature: API related to Manga Lists - positive cases

 
Scenario Outline: `Check that GET request returns correct response code: <NameOfRequest>`
Given I send GET request to <API>
Then I expect response code to be <StatusCode>

Examples:
| API                                                                                    | StatusCode | NameOfRequest              |
| https://mangalib.org/search?type=manga&q=boss                                          | 200        | Search Manga               |
| https://mangalib.org/api/v2/comments?type=manga&post_id=53591&order=latest             | 200        | Comments List              |
| https://mangalib.org/manga-short-info?slug=adabana&id=33052&advanced_info=1&type=manga | 200        | Manga - short info         |


Scenario Outline: 'Check that GET request returns correct response body: <NameOfRequest>'
Given I send GET request to <API>
Then I expect JSON schema to equal <JSONSchema>

Examples:
| API                                                                                    | JSONSchema               | NameOfRequest              |
| https://mangalib.org/search?type=manga&q=boss                                          | searchMangaSchema        | Search Manga               |
| https://mangalib.org/api/v2/comments?type=manga&post_id=53591&order=latest             | seeCommentsSchema        | Comments List              |
| https://mangalib.org/manga-short-info?slug=adabana&id=33052&advanced_info=1&type=manga | mangaShortInfoSchema     | Manga - short info         |


Feature: API related to Manga Lists 
 
Scenario Outline: `Check that GET request returns correct response code`
Given I send GET request to <API>
Then I expect response code to be <StatusCode>

Examples:
| API                                                                                    | StatusCode |
| https://mangalib.org/search?type=manga&q=boss                                          | 200        |
| https://mangalib.org/api/v2/comments?type=manga&post_id=53591&order=latest             | 200        |
| https://mangalib.org/manga-short-info?slug=adabana&id=33052&advanced_info=1&type=manga | 200        |
#| https://mangalib.org/api/v2/comments?type=manga&order=latest               | 400         https://github.com/axios/axios#interceptors

Scenario Outline: 'Check that GET request returns correct response body'
Given I send GET request to <API>
Then I expect JSON schema to equal <JSONSchema>

Examples:
| API                                                                                    | JSONSchema               |
| https://mangalib.org/search?type=manga&q=boss                                          | searchMangaSchema        |
| https://mangalib.org/api/v2/comments?type=manga&post_id=53591&order=latest             | seeCommentsSchema        |
| https://mangalib.org/manga-short-info?slug=adabana&id=33052&advanced_info=1&type=manga | mangaShortInfoSchema     |



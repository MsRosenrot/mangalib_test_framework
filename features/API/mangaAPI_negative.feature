Feature: API related to Manga Lists - negative cases 

 
Scenario Outline: `Check that GET request returns correct response code: <NameOfRequest>`
Given I send GET request to <API>
Then I expect response code to be <StatusCode>

Examples:
| API                                                                                    | StatusCode | NameOfRequest              |
| https://mangalib.org/api/v2/comments?type=manga&order=latest                           | 400        | Comments List - no post_id |


Scenario Outline: 'Check that GET request returns correct response body: <NameOfRequest>'
Given I send GET request to <API>
Then I expect JSON schema to equal <JSONSchema>

Examples:
| API                                                                                    | JSONSchema               | NameOfRequest              |
| https://mangalib.org/api/v2/comments?type=manga&order=latest                           | seeCommentsInvalidSchema | Comments List - no post_id |
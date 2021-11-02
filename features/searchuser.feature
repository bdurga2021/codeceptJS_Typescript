@searchUser
Feature: search User
  As a user
  I need to be able to search a user
  So I can manage those users inside system

  Scenario Outline: Search User
    Given I am on homePage
    When  I should be able to search with <criteria>
    And   I should successfully see user <criteria> in serach results
    Examples:
      | criteria |
      | novak    |





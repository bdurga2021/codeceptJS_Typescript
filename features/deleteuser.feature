@deleteUser
Feature: delete User
  As a user
  I need to be able to delete a user
  So I can manage those users inside system

  Scenario: Delete User
    Given I am on homePage
    Then  I should be able to delete user
      | username |
      | Novak    |
    And   A user should be successfully created

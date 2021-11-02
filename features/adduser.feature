@addUser
Feature: Add User
  As a user
  I need to be able to Add a user
  So I can manage those users inside system

  Scenario: Add User
    Given I am on homePage
    When  I populate all user fields with valid data
      | firstname | lastname | username | password | customer     | role     | email          | phone      |
      | Patriots   | WAT       | pat2021   | Demo1234 | Company BBB| Customer | pat2021@aa.com | 1234567890 |
    And   I should be able to save new user
    Then  A new user should be successfully created




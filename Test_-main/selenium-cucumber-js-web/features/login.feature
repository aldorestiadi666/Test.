@LoginBukalapak
Feature: Login Bukalapak
  User can Login to Bukalapak

  Scenario: Login Bukalapak
    Given User on the Bukalapak homepage
    When User click "Login" for Login Page
    And User can input email and password
      | email      | password       |
      | giansl.com | tespassword123 |
    And User click button "Login" to open an account
    Then User should see transaction page with their profile

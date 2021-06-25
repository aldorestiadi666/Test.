@SearchBukalapak
Feature: Search Bukalapak
  User can Search Item at Bukalapak

  Scenario: Search Item Bukalapak
    Given User Login on Bukalapak
    When User Input text to Search Item
      | item |
      | baju |
    And User will click search icon
    Then User should see "baju" appear in screen

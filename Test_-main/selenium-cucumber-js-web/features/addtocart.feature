@AddtoCartBukalapak
Feature: Add To Cart Bukalapak
  User can Add Item to Cart at Bukalapak

  Scenario: Add Item to Cart Bukalapak
    Given User Login on Bukalapak
    When User can Search item
    And User can click item
    And User will choose Ukuran "Hitam-M"
    And User can click "Masukkan Keranjang" to add item in cart
    And User can click "Lihat Keranjang" to open cart
    Then User should see the item in Cart

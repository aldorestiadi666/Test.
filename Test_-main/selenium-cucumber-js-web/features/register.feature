@RegisterBukalapak
Feature: Register Bukalapak
  User can create new account
  
  Scenario: Register new account with valid data
    Given User on the Bukalapak homepage for register
    When User click "Daftar" for registration
    And User can input data register for registration at Bukalapak
      | email                        |
      | giansl@gmail.com |
    And User click button "Daftar" to create new account
    Then User should see new pop up "Verifikasi Pendaftaran"
    And User click button "Ya, kirim kode" to get verification code
    And User should see "Masukkan Kode Rahasia yang diterima via email di:" in pop up
    And User can input valid verification code
      | code   |
      | 123456 |
    And User click button "Verifikasi" to verify and create account
    And User should see "Akun kamu berhasil dibuat!" in new page

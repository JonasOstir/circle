# TODO write better login feature HOS-7883
# TODO investigate cucumber tagging HOS-7882
Feature: Login
    Scenario: Login form is shown
      Given I go to the login page
      Then I should see a login form
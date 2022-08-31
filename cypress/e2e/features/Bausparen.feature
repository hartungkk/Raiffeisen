   Feature: tests examples
    
    Scenario: user can download information about the product
    When I visit Bausparen web page
    And Accept all cookies
    And I scroll down for "600"px
    And I see the button for download info about product
    And I click to the download button
    Then I see a tab with pdf

    Scenario: user can see video
    When I visit Bausparen web page
    And Accept all cookies
    And I scroll down for "1500"px
    And I see videoplayer
    Then videoplayer is working

    Scenario: user can see all four main products
    When I visit Bausparen web page
    And Accept all cookies
    And I scroll down for "300"px
    And I see Unsere Produkte carousel with 3 items
    And I click to arrow
    Then I should see last item

    Scenario: I want to abuse subscription for news Feature
    When I want make"5" requests from service api to email"fayec43487@xitudy.com"
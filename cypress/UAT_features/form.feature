Feature: simple form
Scenario: To validate simple form
Given User navigating simple form url
When User enter first name 
And User enter last name
And user enter email
And user enter contact number
And user enter message click on submit button
Then Form will be submitted

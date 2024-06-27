Feature: Login 
Scenario Outline: Login orangeHRM
Given User will navigating the url
When User will enter the username <username>
And User will enter the password <pass>
And User will click the Login button
Then Either user will logged in or Error message should be displayed

Examples:
    | username | pass     |
    | admin12  | Adm123   |
    | user12   | Admin123 |
    | Admin    | admin123 |

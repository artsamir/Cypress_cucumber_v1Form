import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('User will navigating the url',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

When('User will enter the username {word}',(username)=>{

    cy.get('input[placeholder="Username"]').type(username)
    
})

And('User will enter the password {word}',(pass)=>{

    cy.get('input[placeholder="Password"]').type(pass)

})

And('User will click the Login button',()=>{

    cy.get('.orangehrm-login-button').click()

})

Then('Either user will logged in or Error message should be displayed',()=>{

    cy.log('performing scenario outline')

})

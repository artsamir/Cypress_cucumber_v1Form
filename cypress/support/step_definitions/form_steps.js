import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('User navigating simple form url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

When('User enter first name',()=>{
    
    cy.get('#firstName').type('Samir')

})

And('User enter last name',()=>{

    cy.get('#lastName').type('Saren')
    
})

And('user enter email',()=>{

    cy.get('#email').type('samir111@email.com')

})

And('user enter contact number',()=>{

    cy.get('#number').type('8159071212')

})

And('user enter message click on submit button',()=>{

    cy.get('textarea[rows="2"]').type('Hello, I am Samir.. I am automate this form')
    cy.get('input[value="submit"').type('q')

})

Then('Form will be submitted',()=>{

    cy.on("window:alert",(message)=>{
            // Asserting the alert message -- 'expect' is the function for assertion
            expect(message).to.eq('Thank You for reaching out to us, sa sar')
            return true;
        })

})



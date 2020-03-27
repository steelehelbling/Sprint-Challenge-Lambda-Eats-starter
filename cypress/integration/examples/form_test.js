describe("test our inputs and submit our form", function(){
    beforeEach(function(){
       cy.visit("http://localhost:3002/") 
    })
   it ("add test to inputs and subit form", function(){
    cy.get("li")
    .click();

    cy.get('input[name="name"]')
    .type("steele")
    .should("have.value", "steele");
    
        cy.get("textarea")
        .type("I want less cheese")
        .should("have.value", "I want less cheese")

        cy.get("#positions")
        .select("small")
        .should("have.value", "small")   

        cy.get("[type='checkbox']")
        .check()
        .should('be.checked')

        cy.get("button")
        .click();
   });
});
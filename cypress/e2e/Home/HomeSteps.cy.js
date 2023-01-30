import { When, Then } from "cypress-cucumber-preprocessor";

When("I visit pokerreact.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a menu", () => {
   cy.visit('http://localhost:3000') // specify full URL if baseUrl is null or the domain is different the baseUrl
  cy.contains('poker')
  cy.get(':nth-child(2) > .nav-link').click()
  cy.url().should('include', '/ChampionShip')
  cy.get(':nth-child(3) > .nav-link').click()
  cy.url().should('include', '/Authentication')
  cy.get(':nth-child(4) > .nav-link').click()
  cy.url().should('include', '/Register')
  cy.get(':nth-child(5) > .nav-link').click()
  cy.url().should('include', '/About')
  cy.Login("email@email.com","password")
});

describe('Tessting Log In Page', () => {
  it('Naming new list', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#login').clear();
    cy.get('#password').clear();

    cy.get('#login').type("bubusmaly");
    cy.get('#password').type("bubusmaly");

    cy.get('#button').click();

    cy.url()
      .should('include', '/home');
    cy.get('#nameList').type('Name For Testing');
    cy.get('#addName').click();
    cy.url()
      .should('include', '/list');
    // cy.contains('Name For Testing');
  });

});
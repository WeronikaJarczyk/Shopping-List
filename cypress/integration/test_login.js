describe('Tessting Log In Page', () => {
  it('Loading home page', () => {
    cy.visit('http://localhost:3000/');
  });

  it('Log in with non existing user', () => {
    cy.get('#login').clear();
    cy.get('#password').clear();

    cy.get('#login').type("nonexistinguser");
    cy.get('#password').type("nonexistinguser");

    cy.get('#button').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Wrong login or password`)
    })
  });

  it('Log in with wrong password', () => {
    cy.get('#login').clear();
    cy.get('#password').clear();

    cy.get('#login').type("bubusmaly");
    cy.get('#password').type("nonexistinguser");

    cy.get('#button').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Wrong password`)
    })
  });

  it('Log in with valid user', () => {
    cy.get('#login').clear();
    cy.get('#password').clear();

    cy.get('#login').type("bubusmaly");
    cy.get('#password').type("bubusmaly");

    cy.get('#button').click();

    cy.url()
      .should('include', '/home');
  });
});
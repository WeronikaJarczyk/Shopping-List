
describe('Tessting Register Page', () => {
  it('Loading home page', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Create An Account').click();

    cy.url()
      .should('include', '/register');
  });

  it('Reister with incorrect input', () => {

    cy.get('#nameInput').type('TestLogin');
    cy.get('#emailInput').type('TestLogin@gmail.com');
    cy.get('#passwordInput').type('testpassword');
    cy.get('#passwordInputR').type('testd');
    cy.contains('Register').click();

    cy.contains("Error");
    cy.url()
      .should('include', '/');
  })

  // it('Reister with correct input', () => {

  //   cy.get('#nameInput').type('TestLogin');
  //   cy.get('#emailInput').type('TestLogin@gmail.com');
  //   cy.get('#passwordInput').type('testpassword');
  //   cy.get('#passwordInputR').type('testpassword');
  //   cy.contains('Register').click();

  //   cy.contains("You have successfully register");
  //   cy.url()
  //     .should('include', '/');
  // });
})
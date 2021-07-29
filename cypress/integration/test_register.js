
describe('Testing Register Page', () => {
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


    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Error!`)
    })
    cy.url()
      .should('include', '/register');
  })

  it('Reister with correct input', () => {
    cy.get('#nameInput').clear();
    cy.get('#emailInput').clear();
    cy.get('#passwordInput').clear();
    cy.get('#passwordInputR').clear();

    cy.get('#nameInput').type('TestLogin');
    cy.get('#emailInput').type('TestLogin@gmail.com');
    cy.get('#passwordInput').type('testpassword');
    cy.get('#passwordInputR').type('testpassword');
    cy.contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`You have successfully register`)
    })
    cy.url()
      .should('include', '/');
  });

  it('Reister with already exising user', () => {

    cy.contains('Create An Account').click();

    cy.get('#nameInput').clear();
    cy.get('#emailInput').clear();
    cy.get('#passwordInput').clear();
    cy.get('#passwordInputR').clear();

    cy.get('#nameInput').type('TestLogin');
    cy.get('#emailInput').type('TestLogin@gmail.com');
    cy.get('#passwordInput').type('testpassword');
    cy.get('#passwordInputR').type('testpassword');
    cy.contains('Register').click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('User already exists')
    })
  });
})
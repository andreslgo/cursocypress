/* eslint-disable no-undef */
describe('Validaciones del formulario', () => {
  it('Valide nombre incorrecto', () => {
    cy.visit('http://localhost:8080')
    cy.get('#name').clear().type('An').blur()
    cy.get("#name").next('.msg-error').should('to.be.visible')
  })
  it('Valide nombre correcto', () => {
    cy.get('#name').clear().type('Andres Luque').blur()
    cy.get("#name").next('.msg-error').should('to.be.not.visible')
  })

  it('Validacion de formulario incorrecto', () => {
    cy.contains("button", "Enviar").click()
    cy.wait(1000)
    cy.get("form").children(".alert-danger").should('to.be.visible')
  });
  it('Validacion de formulario correcto', () => {
    cy.get("#email").type('test@test.com')
    cy.get("#phone").type('3007393899')
    cy.contains("button", "Enviar").click()
    cy.wait(1000)
    cy.get("form").children(".alert-danger").should('to.be.not.visible')
  });

});



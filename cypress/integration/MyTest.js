/* eslint-disable no-undef */
describe('Validaciones del formulario', () => {
  /**
   * before
   * beforeEach
   * after
   * afterEach
   * .skip
   * .only
   */

  before(() => {
    cy.log('Before Hook')
    cy.visit('http://localhost:8080')
    cy.fixture('names.json').as('names')
  })

  beforeEach(() => {
    cy.log('BeforeEach Hook')
  })

  it('Valide nombre incorrecto', () => {
    cy.get('#name').clear().type('An').blur()
    cy.get("#name").next('.msg-error').should('to.be.visible')
  })

  it.only('Valide nombre correcto', () => {
    cy.get("@names").then((names) => {
      for (let i = 0; i < names.length; i++) {
        cy.get('#name').clear().type(names[i].name).blur()
        cy.get("#name").next('.msg-error').should('to.be.not.visible')
      }
    })
  })

  it('Validacion de formulario incorrecto', () => {
    cy.contains("button", "Enviar").click()
    cy.wait(1000)
    cy.get("form").children(".alert-danger").should('to.be.visible')
  });
  it.skip('Validacion de formulario correcto', () => {
    cy.get("#name").type('Andres Luque')
    cy.get("#email").type('test@test.com')
    cy.get("#phone").type('3007393899')
    cy.contains("button", "Enviar").click()
    cy.wait(1000)
    cy.get("form").children(".alert-danger").should('to.be.not.visible')
  });

  after(() => {
    cy.log('After Hook')
  })

  afterEach(() => {
    //cy.get("#name").clear()
  })

});



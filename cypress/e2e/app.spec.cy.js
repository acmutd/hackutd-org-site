
describe("Navigation", () => {

  it('should be able to view the title', () => {

    cy.visit('/')

    cy.get('h1').contains("HackUTD")
  })

  it('should be able to view the headers', () => {
    
    cy.visit('/')

    cy.get('h2').contains("Our Mission")

    cy.get('h2').contains("Hackathons")

    cy.get('h2').contains("Meet the Team")

    cy.get('h2').contains("Support Us")

    cy.get('h2').contains("Sponsors")

    cy.get('h2').contains("Open Source")
  })
})
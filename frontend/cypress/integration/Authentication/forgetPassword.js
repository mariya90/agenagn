describe("the system will redirect to the password reset page", () => {

    it("first user will go to the login page then after to the reset page", () => {

        cy.visit("/Login")
        cy.get('#email')
            .type('cmd@gmail.com')
        cy.get("#password")
            .type('passpass1')
        cy.get("#login")
            .click()
        cy.wait(1000)
        cy.get("#reset").click()

        cy.wait(1000)
        cy.get('#email')
            .type('cmd@gmail.com')
        cy.get('#submit')
            .type('passpass')
        cy.wait(1000)
        cy.contains("Reset Password")
        cy.get('[data-cy=content1]').should("exist")

    })

})

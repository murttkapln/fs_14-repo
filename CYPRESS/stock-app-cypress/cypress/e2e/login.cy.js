describe("login-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("login", () => {

        cy.url().should("include", "/");
        cy.get("[data-test='loginHeader']").contains("Login").should("be.visible");
        cy.get("[data-test='emailLogin']")
            .should("be.visible").type("ghost@gmail.com")
        cy.get("[data-test='passwordLogin']")
            .should("be.visible").type("Kaplan2525.")
        cy.get("[data-test='sbmtlogin']")
            .should("be.visible")
            .click({ force: true });
        cy.url().should("include", "/stock");
        


    });
});
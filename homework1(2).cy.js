describe("Praca domowa pierwszy kod", () => {
    it("Login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
    });

    it("Zaloguj się i wyloguj z konta", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("testowyqa@qa.team");
        cy.get("#user_password").type("QA!automation-1");
        cy.get('button[type="submit"]').click();
        cy.get("#open-navigation-menu-mobile").click();
        cy.contains('Log out').click();
    });
  });
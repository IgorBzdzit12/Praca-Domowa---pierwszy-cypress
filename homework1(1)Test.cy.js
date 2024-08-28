describe("Praca domowa pierwszy kod", () => {
    it("Login", () => {
      cy.visit("https://www.edu.goit.global/account/login");
    });

    it("Zaloguj się i wyloguj z konta", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get("#user_email").type("user888@gmail.com");
        cy.get("#user_password").type("1234567890");
        cy.get('button[type="submit"]').click();
        cy.get("#open-navigation-menu-mobile").click();
        cy.contains('Log out').click();
        cy.url().should('include', '/account/login');
    });
  });

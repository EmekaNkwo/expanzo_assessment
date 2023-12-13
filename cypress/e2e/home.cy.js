describe("Go to the Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should switch tabs and display corresponding content", () => {
    cy.get("[data-cy=tab-all]").click();
    cy.get("[data-cy=tab-content-1]").should("be.visible");
    cy.get("[data-cy=tab-content-2]").should("not.be.visible");
    cy.get("[data-cy=tab-content-3]").should("not.be.visible");

    cy.get("[data-cy=tab-companies]").click();
    cy.get("[data-cy=tab-content-1]").should("not.be.visible");
    cy.get("[data-cy=tab-content-2]").should("be.visible");
    cy.get("[data-cy=tab-content-3]").should("not.be.visible");

    cy.get("[data-cy=tab-phones]").click();
    cy.get("[data-cy=tab-content-1]").should("not.be.visible");
    cy.get("[data-cy=tab-content-2]").should("not.be.visible");
    cy.get("[data-cy=tab-content-3]").should("be.visible");
  });
});

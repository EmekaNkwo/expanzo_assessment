describe("Go to the Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact");
  });

  it("should display contact information", () => {
    // Check if the page header
    cy.get("h3").should("have.text", "Contact");

    // Check headquarters information
    cy.contains("Headquarters").should("be.visible");
    cy.contains("DHO s.r.o").should("be.visible");
    cy.contains("Borivojova 878/35").should("be.visible");

    // Check email information
    cy.contains("Email").should("be.visible");
    cy.contains("info@expanzo.com").should("be.visible");
  });
});

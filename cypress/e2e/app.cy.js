/** @format */

describe("Air quality app", function () {
  it("front page can be opened", function () {
    cy.visit("https://air-quality-app.vercel.app/");
    cy.contains("Search");
  });

  it("can search for a location", function () {
    cy.visit("https://air-quality-app.vercel.app/");
    cy.get("input").type("Helsinki");
    cy.contains("button", "Search").click();
    cy.get("#aq-card").should("be.visible");
  });

  it("display proper error massage", function () {
    cy.visit("https://air-quality-app.vercel.app/");
    cy.get("input").type("Not a city");
    cy.contains("button", "Search").click();
    cy.contains("div", "Error")
      .should("be.visible")
      .and("contain", "Not a city");
  });
});

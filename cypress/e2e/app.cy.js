/** @format */

describe("Air quality app", function () {
  it("front page can be opened", function () {
    cy.visit("https://air-quality-app.vercel.app/");
    cy.contains("Search");
  });
});

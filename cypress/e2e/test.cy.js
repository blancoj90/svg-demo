/// <reference types="cypress" />

describe("simple test", () => {
  it("fids a jpg fixture", () => {
    // visit a test url
    cy.visit("www.google.com");
    // finding the file in the fixtures folder
    cy.readFile("cypress/fixtures/testimagejpeg.jpeg");
  });

  it("fids a bmp fixture", () => {
    // visit a test url
    cy.visit("www.google.com");
    // finding the file in the fixtures folder
    cy.readFile("cypress/fixtures/test.bmp");
  });

  it("fids a svg fixture", () => {
    // visit a test url
    cy.visit("www.google.com");
    // finding the file in the fixtures folder
    cy.readFile("cypress/fixtures/test.svg");
  });
});

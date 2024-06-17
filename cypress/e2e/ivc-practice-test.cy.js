/// <reference types="Cypress" />
import { navigateTo } from "../support/page_objects/navigationBar";
import { onPracticePage } from "../support/page_objects/practicePage";
import { onContactPage } from "../support/page_objects/contactPage";
import { onPracticeTestLoginPage } from "../support/page_objects/practiceTestLogin";

const loginCredentials = {
  userName: "student",
  password: "Password123",
};

describe("Practise test automation application", () => {
  beforeEach("Open homepage", () => {
    cy.navigateToHomePage();
  });

  it("Open the practice page and login, view contact page and submit the form", () => {
    // Go to the practice page
    navigateTo.practicePage();

    // Click test login page
    onPracticePage.clickTestLogin();

    // Enter login details
    onPracticeTestLoginPage.login(loginCredentials);

    // Verify successful login to practice
    onPracticeTestLoginPage
      .loginMessage()
      .should("contain", "Logged In Successfully");

    // Go to contact page
    navigateTo.contactPage();

    // Submit form on contact page
    onContactPage.clickSubmitButton();

    // Assert correct error message is displayed
    onContactPage.isFirstNameErrorMessageVisible().then(isVisible => {
      expect(isVisible).to.be.true;
    });

    onContactPage.isLastNameErrorMessageVisible().then(isVisible => {
      expect(isVisible).to.be.true;
    });

    onContactPage.isEmailErrorMessageVisible().then(isVisible => {
      expect(isVisible).to.be.true;
    });

    onContactPage.commentOrMessageErrorMessageVisible().then(isVisible => {
      expect(isVisible).to.be.true;
    })
  });
});

/// <reference types="Cypress" />
import { navigateTo } from "../support/page_objects/navigationBar";
import { onPracticePage } from "../support/page_objects/practicePage";
import { onContactPage } from "../support/page_objects/contactPage";
import { onPracticeTestLoginPage } from "../support/page_objects/practiceTestLogin";

describe("Practise test automation application", () => {
  beforeEach("Open homepage", () => {
    // Open practice test automation webpage
    cy.navigateToHomePage();
  });

  it("Open the practice page and login, view contact page and submit the form", () => {
    // Go to the practice page
    navigateTo.practicePage();

    // Click test login page
    onPracticePage.clickTestLogin();

    // Enter login details
    onPracticeTestLoginPage.enterUsername("student");
    onPracticeTestLoginPage.enterPassword("Password123");
    onPracticeTestLoginPage.submitForm();

    // Verify successful login to practice
    onPracticeTestLoginPage
      .loginMessage()
      .should("contain", "Logged In Successfully");

    // Go to contact page
    navigateTo.contactPage();
    onContactPage.clickSubmitButton();

    // Verify error messages on the contact form
    onContactPage.verifyNameFieldErrorMessage();
    onContactPage.verifyEmailFieldErrorMessage();
    onContactPage.verifyCommentErrorMessage();
  });
});

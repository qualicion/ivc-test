export class practiceTestLoginPage {
  constructor() {
    this.usernameField = "#username";
    this.passwordField = "#password";
    this.submitButton = "#submit";
    this.practiceTestLoginPageHeader = ".post-title";
  }
  enterUsername(username) {
    cy.get(this.usernameField).clear().type(username);
  }
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  submitForm() {
    cy.get(this.submitButton).click();
  }

  loginMessage() {
    return cy.get(this.practiceTestLoginPageHeader);
  }
}

export const onPracticeTestLoginPage = new practiceTestLoginPage();

class practiceTestLoginPage {
  constructor() {
    this.usernameFieldSelector = "#username";
    this.passwordFieldSelector = "#password";
    this.submitButtonSelector = "#submit";
    this.practiceTestLoginPageHeaderSelector = ".post-title";
  }

  enterUsername(username) {
    cy.get(this.usernameFieldSelector).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordFieldSelector).clear().type(password);
  }

  clickSubmitButton() {
    cy.get(this.submitButtonSelector).click();
  }

  loginMessage() {
    return cy.get(this.practiceTestLoginPageHeaderSelector);
  }

  /*
  // login {object} loginCredentials should have username and password
  */
  login(loginCredentials) {
    this.enterUsername(loginCredentials.userName);
    this.enterPassword(loginCredentials.password);
    this.clickSubmitButton();
  }
}

export const onPracticeTestLoginPage = new practiceTestLoginPage();

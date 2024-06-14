export class contactPage {
  constructor() {
    this.nameFieldSelector = '[data-field-id="0"]';
    this.emailFieldSelector = '[data-field-id="1"]';
    this.commentFieldSelector = '[data-field-id="2"]';
    this.submitButtonSelector = "[type=submit]";
  }

  getNameField() {
    return cy.get(this.nameFieldSelector);
  }

  getEmailField() {
    return cy.get(this.emailFieldSelector);
  }

  getCommentField() {
    return cy.get(this.commentFieldSelector);
  }

  verifyNameFieldErrorMessage() {
    this.getNameField().then((name) => {
      cy.wrap(name).should(
        "have.class",
        "wpforms-field wpforms-field-name wpforms-has-error"
      );
    });
  }

  verifyEmailFieldErrorMessage() {
    this.getEmailField().then((email) => {
      cy.wrap(email).should(
        "have.class",
        "wpforms-field wpforms-field-email wpforms-has-error"
      );
    });
  }

  verifyCommentErrorMessage() {
    this.getCommentField().then((comment) => {
      cy.wrap(comment).should(
        "have.class",
        "wpforms-field wpforms-field-textarea wpforms-has-error"
      );
    });
  }
  clickSubmitButton() {
    cy.get(this.submitButtonSelector).click();
  }
}

export const onContactPage = new contactPage();

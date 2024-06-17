import { onBasePage } from "./basePage";

class contactPage {
  constructor() {
    this.nameFieldSelector = '[data-field-id="0"]';
    this.emailFieldSelector = '[data-field-id="1"]';
    this.commentFieldSelector = '[data-field-id="2"]';
    this.submitButtonSelector = "[type=submit]";
    this.firstNameErrorMessageSelector =
      '[class="wpforms-field-row-block wpforms-first wpforms-one-half"]';
    this.lastNameErrorMessageSelector =
      '[class*="wpforms-field-row-block wpforms-o"]';
    this.emailErrorMessageSelector =
      '[class*="field-email wpforms-has-error"]';
    this.commentOrMessageErrorMessageSelector =
      '[class*="field-textarea wpforms-has-error"]';
  }

  isFirstNameErrorMessageVisible() {
    return onBasePage.isElementVisible(
      this.firstNameErrorMessageSelector
    );
  }

  isLastNameErrorMessageVisible() {
    return onBasePage.isElementVisible(
      this.lastNameErrorMessageSelector
    );
  }

  isEmailErrorMessageVisible() {
    return onBasePage.isElementVisible(this.emailErrorMessageSelector);
  }

  commentOrMessageErrorMessageVisible() {
    return onBasePage.isElementVisible(
      this.commentOrMessageErrorMessageSelector
    );
  }

  clickSubmitButton() {
    cy.get(this.submitButtonSelector).click();
  }
}

export const onContactPage = new contactPage();

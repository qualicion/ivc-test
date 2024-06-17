class Navigation {
  practicePage() {
    cy.contains("Practice").click();
  }

  contactPage() {
    cy.contains("Contact").click();
  }
}

export const navigateTo = new Navigation();

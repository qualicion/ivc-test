class practicePage {
  clickTestLogin() {
    cy.contains("a", "Test Login Page").click();
  }
}

export const onPracticePage = new practicePage();

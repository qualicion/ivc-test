class basePage {
    // Generalized method to check visibility of any element
    isElementVisible(selector) {
      return cy.get('body').then($body => {
        if ($body.find(selector).length > 0) {
          return cy.get(selector).then($el => {
            return $el.is(':visible');
          });
        } else {
          return false;
        }
      });
    }
  }
  
export const onBasePage = new basePage();
  
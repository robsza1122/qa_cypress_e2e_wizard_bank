class BankAdminObject {
  clickAdminPanelBtn() {
    cy.contains('.btn', 'Bank Manager Login')
      .click();
  }

  typeUserData(placeholder, name) {
    cy.get(`[placeholder="${placeholder}"]`)
      .type(name);
  }

  clickAddCustomerBtn() {
    cy.get('[ng-click="addCust()"]')
      .click();
  }

  clickShowCustomerBtn() {
    cy.get('[ng-click="showCust()"]')
      .click();
  }

  clickSubmitBtn() {
    cy.get(`[type="submit"]`)
      .click();
  }

  clickDeleteUser() {
    cy.get('[ng-click="deleteCust(cust)"]')
      .last()
      .click();
  }

  clickOpenAccountBtn() {
    cy.get('[ng-click="openAccount()"]')
      .click();
  }

  selectUser(user) {
    cy.get('[ng-model="custId"]')
      .select(user);
  }

  selectCurrency(currency) {
    cy.get('[ng-model="currency"]')
      .select(currency);
  }

  assertCreatedUser(firstName, lastName, postCode) {
    cy.get('.ng-binding')
      .should('contain', firstName);
    cy.get('.ng-binding')
      .should('contain', lastName);
    cy.get('.ng-binding')
      .should('contain', postCode);
  }

  assertDeletedUser(firstName, lastName, postCode) {
    cy.get('.ng-binding')
      .should('not.contain', firstName);
    cy.get('.ng-binding')
      .should('not.contain', lastName);
    cy.get('.ng-binding')
      .should('not.contain', postCode);
  }

  assertOpenAccountForUser(firstName, lastName, postCode, account) {
    cy.get('.ng-binding')
      .should('contain', firstName);
    cy.get('.ng-binding')
      .should('contain', lastName);
    cy.get('.ng-binding')
      .should('contain', postCode);
    cy.get('.ng-binding')
      .should('contain', account);
  }
}

module.exports = BankAdminObject;

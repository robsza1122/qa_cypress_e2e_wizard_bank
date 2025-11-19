class BankUserObject {
  clickCustomerLogin() {
    cy.contains('.btn', 'Customer Login').click();
  }

  selectUser(user) {
    cy.get('[name="userSelect"]').select(user);
  }

  clickLoginBtn() {
    cy.contains('.btn', 'Login').click();
  }

  assertAccountNumber(accountNumber) {
    cy.contains('[ng-hide="noAccount"]', 'Account Number')
      .contains('strong', accountNumber)
      .should('be.visible');
  }

  assertCurrency(currency) {
    cy.contains('.ng-binding', currency)
      .should('be.visible');
  }

  clickDepositBtn() {
    cy.get('[ng-click="deposit()"]').click();
  }

  typeDeposit(amount) {
    cy.get('[placeholder="amount"]').type(amount);
  }

  submitTransaction() {
    cy.contains('[type="submit"]', 'Deposit').click();
  }

  assertTransaction() {
    cy.get('[ng-show="message"]')
      .should('contain', 'Transaction successful');
  }

  assertDeposit() {
    cy.get('[ng-show="message"]')
      .should('contain', 'Deposit Successful');
  }

  assertAccountBalance(amount) {
    cy.contains('[ng-hide="noAccount"]', 'Balance')
      .contains('strong', amount)
      .should('be.visible');
  }

  clickWithdrawalBtn() {
    cy.get('[ng-click="withdrawl()"]').click();
  }

  assertWithdrawal() {
    cy.contains('[type="submit"]', 'Withdraw')
      .should('be.visible');
  }

  typeAmountOfWithdrawal(amount) {
    cy.get('[placeholder="amount"]').type(amount);
  }

  clickSubmitBtn() {
    cy.contains('[type="submit"]', 'Withdraw').click();
  }

  assertBalance(balance) {
    cy.contains('[ng-hide="noAccount"]', 'Balance')
      .contains('strong', balance)
      .should('be.visible');
  }
}

export default BankUserObject;

import { faker } from '@faker-js/faker';
import BankUserObject from '../support/BankUser.Object';
/// <reference types='cypress' />

const bankUser = new BankUserObject();

describe('Bank User', () => {
  const depositAmount = '5096';
  const withdrawAmount = `${faker.number.int({ min: 50, max: 500 })}`;
  const user = 'Hermoine Granger';
  const accountNumber = '1001';

  beforeEach(() => {
    cy.visit('/');
  });

  it('should provide the ability to work with bank account', () => {
    bankUser.clickCustomerLogin();
    bankUser.selectUser(user);
    bankUser.clickLoginBtn();

    bankUser.assertAccountNumber(accountNumber);
    bankUser.assertCurrency('Dollar');

    bankUser.clickDepositBtn();
    bankUser.typeWithdraw(withdrawAmount);
    bankUser.submitTransaction();

    bankUser.assertDeposit();
    bankUser.assertAccountBalance(
      (Number(depositAmount) + Number(withdrawAmount)).toString());

    bankUser.clickWithdrawalBtn();
    bankUser.assertWithdrawal();
    bankUser.typeAmountOfWithdrawal(withdrawAmount);
    bankUser.clickSubmitBtn();

    bankUser.assertTransaction();
    bankUser.assertAccountBalance(depositAmount);
  });

  it('should provide ability to logout user', () => {
    bankUser.clickCustomerLogin();
    bankUser.selectUser(user);
    bankUser.clickLoginBtn();
    bankUser.assertLoginUser(user);
    bankUser.clickLogoutBtn();
    bankUser.assertLogoutUser();
  });
});

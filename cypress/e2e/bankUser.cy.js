import { faker } from '@faker-js/faker';
import BankUserObject from '../support/BankUser.Object';
/// <reference types='cypress' />

const bankUser = new BankUserObject();

describe('Bank User', () => {
  const depositAmount = `${faker.number.int({ min: 500, max: 1000 })}`;
  const withdrawAmount = `${faker.number.int({ min: 50, max: 500 })}`;
  const balance = depositAmount - withdrawAmount;
  const user = 'Harry Potter';
  const accountNumber = '1004';

  before(() => {
    cy.visit('/');
  });

  it('should provide the ability to work with bank account', () => {
    bankUser.clickCustomerLogin();
    bankUser.selectUser(user);
    bankUser.clickLoginBtn();

    bankUser.assertAccountNumber(accountNumber);
    bankUser.assertCurrency('Dollar');

    bankUser.clickDepositBtn();
    bankUser.typeDeposit(depositAmount);
    bankUser.submitTransaction();

    bankUser.assertDeposit();
    bankUser.assertAccountBalance(depositAmount);

    bankUser.clickWithdrawalBtn();
    bankUser.assertWithdrawal();
    bankUser.typeAmountOfWithdrawal(withdrawAmount);
    bankUser.clickSubmitBtn();

    bankUser.assertTransaction();
    bankUser.assertAccountBalance(balance);
  });

  it('should provide ability to logout user', () => {
    bankUser.clickCustomerLogin();
    bankUser.selectUser(user);
    bankUser.clickLoginBtn();

    bankUser.assertAccountNumber(accountNumber);
    bankUser.assertCurrency('Dollar');
  });
});

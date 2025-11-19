const { faker } = require('@faker-js/faker');
const BankAdminObject = require('../support/BankAdmin.Object');

const bankAdmin = new BankAdminObject();

describe('Bank Admin', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const postCode = `${faker.number.int({ min: 10, max: 90 })}-${faker.number.int({ min: 100, max: 999 })}`;

  it('should provide ability to add, open account and delete user', () => {
    bankAdmin.clickAdminPanelBtn();
    bankAdmin.clickAddCustomerBtn();
    bankAdmin.typeUserData('First Name', firstName);
    bankAdmin.typeUserData('Last Name', lastName);
    bankAdmin.typeUserData('Post Code', postCode);
    bankAdmin.clickSubmitBtn();
    bankAdmin.clickShowCustomerBtn();
    bankAdmin.assertCreatedUser(firstName, lastName, postCode);
    bankAdmin.clickOpenAccountBtn();
    bankAdmin.selectUser(`${firstName} ${lastName}`);
    bankAdmin.selectCurrency('Dollar');
    bankAdmin.clickSubmitBtn();
    bankAdmin.clickShowCustomerBtn();
    bankAdmin.assertOpenAccountForUser(firstName, lastName, postCode, '1006');
    bankAdmin.clickDeleteUser();
    bankAdmin.assertDeletedUser(firstName, lastName, postCode);
  });
});

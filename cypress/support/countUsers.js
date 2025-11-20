function countUsers() {
  cy.get('.table tbody tr')
    .its('length')
    .as('users');
}

export default countUsers;

export {};
const {I,addUserPage} = inject ();

When (/^I should be able to save new user$/,function () {
  addUserPage.save ();
});
Then (/^A new user should be successfully created$/,function () {
  I.seeNumberOfElements('//tr[@class=\'smart-table-data-row ng-scope\']', 8);
});
When (/^I populate all user fields with valid data$/,function (dataTable: any) {
  I.click('body > table > thead > tr:nth-child(2) > td > button');
  I.see('Add User');

  const tableByHeader = dataTable.parse().hashes();
  for (const row of tableByHeader) {
    const firstName: String =row.firstname;
    const lastName: String =row.lastname;
    const userName: String =row.username;
    const password: String =row.password;
    const customer: String =row.customer;
    const role: String =row.role;
    const email: String =row.email
    const phone: String =row.phone
    addUserPage.add(firstName, lastName, userName, password, customer, role, email, phone);
  }
});

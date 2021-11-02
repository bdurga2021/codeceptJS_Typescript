// @ts-ignore
const { I, addUserPage } = inject();
When(/^I should be able to save new user$/, function () {
    addUserPage.save();
});
Then(/^A new user should be successfully created$/, function () {
    I.seeNumberOfElements('//tr[@class=\'smart-table-data-row ng-scope\']', 8);
});
When(/^I populate all user fields with valid data$/, function (dataTable) {
    I.click('body > table > thead > tr:nth-child(2) > td > button');
    I.see('Add User');
    const tableByHeader = dataTable.parse().hashes();
    for (const row of tableByHeader) {
        const firstName = row.firstname;
        const lastName = row.lastname;
        const userName = row.username;
        const password = row.password;
        const customer = row.customer;
        const role = row.role;
        const email = row.email;
        const phone = row.phone;
        addUserPage.add(firstName, lastName, userName, password, customer, role, email, phone);
    }
});

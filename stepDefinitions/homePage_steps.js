// @ts-ignore
const { I, homePage } = inject();
Given(/^I am on homePage$/, function () {
    I.amOnPage('/angularjs-protractor/webtables/');
    I.seeElement('body > table > thead > tr:nth-child(1) > td > input');
    I.waitForElement('//tr[@class=\'smart-table-data-row ng-scope\']');
});
When(/^I should be able to search with (.*)$/, function (criteria) {
    homePage.search(criteria);
});
When(/^I should successfully see user (.*) in serach results$/, function (criteria) {
    I.see(criteria);
    I.seeNumberOfElements('//tr[@class=\'smart-table-data-row ng-scope\']', 1);
});
Then(/^I should be able to delete user$/, function (dataTable) {
    const tableByHeader = dataTable.parse().hashes();
    for (const row of tableByHeader) {
        const userName = row.username;
        homePage.delete(userName);
    }
});
Then(/^A user should be successfully created$/, function () {
    I.seeNumberOfElements('//tr[@class=\'smart-table-data-row ng-scope\']', 0);
});

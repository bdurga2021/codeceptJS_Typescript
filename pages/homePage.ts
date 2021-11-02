// @ts-ignore
const { I } = inject();

module.exports = {

  // insert your locators and methods here
  searchBox: {css: 'body > table > thead > tr:nth-child(1) > td > input'},
  addUserButton: {css: 'body > table > thead > tr:nth-child(2) > td > button'},
  deleteUserButton: {xpath:'//button[@ng-click=\'delUser()\']'},
  okButton:{xpath:'//button[text()=\'OK\']'},

  search(criteria){
    I.fillField(this.searchBox,criteria);
  },

  delete(username){
    this.search(username);
    I.waitForClickable(this.deleteUserButton);
    I.click(this.deleteUserButton);
    I.waitForClickable(this.okButton);
    I.click(this.okButton);
  }
}

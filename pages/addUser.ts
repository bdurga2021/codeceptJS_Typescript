// @ts-ignore
const { I } = inject();

module.exports = {
  firstname: {xpath: '//input[@name=\'FirstName\']'},
  lastname: {xpath: '//input[@name=\'LastName\']'},
  username: {xpath:'//input[@name=\'UserName\']'},
  password: {xpath:'//input[@name=\'Password\']'},
  customerARadio: {xpath: '//label/input[@value=\'15\']'},
  customerBRadio: {xpath: '//label/input[@value=\'16\']'},
  roleIDSelect: {xpath:'//select[@name=\'RoleId\']'},
  email:{xpath:'//input[@name=\'Email\']'},
  phone:{xpath:'//input[@name=\'Mobilephone\']'},
  closeButton:{xpath:'//button[@ng-click=\'close()\']'},
  saveButton:{xpath:'//button[@ng-click=\'save(user)\']'},


  add(firstName, lastName,username,password,customer,role,email,phone) {
    I.fillField(this.firstname,firstName);
    I.fillField(this.lastname,lastName);
    I.fillField(this.username,username);
    I.fillField(this.password,password);
    const locatorCustomer = '//label[text()=\'xxxxx\']/input'
    I.checkOption(locatorCustomer.replace('xxxxx',customer));
    I.selectOption(this.roleIDSelect, role);
    I.fillField(this.email,email);
    I.fillField(this.phone,phone);
  },

  save() {
    I.click(this.saveButton);
  },

  close() {
    I.click(this.closeButton);
  }

}

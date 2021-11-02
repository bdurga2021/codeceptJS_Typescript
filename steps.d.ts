
/// <reference types='codeceptjs' />
type addUserPage = typeof import('../pages/addUser');
type homePage = typeof import('../pages/homePage');


declare namespace CodeceptJS {
  interface SupportObject {
    I: I,
    addUserPage:addUserPage,
    homePage:homePage
  }
  interface Methods extends Puppeteer {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}

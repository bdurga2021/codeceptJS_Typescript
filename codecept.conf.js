exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://www.way2automation.com',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    addUserPage: './pages/addUser.ts',
    homePage: './pages/homePage.ts'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./dist/stepDefinitions/addUser_steps.js',
      './dist/stepDefinitions/homePage_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    "allure": {
      "enabled": true
    }
  },
  name: 'patriotsWAT'
}

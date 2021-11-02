CodeceptJS TypeScript 
This is a project which includes CodeceptJS + Puppeteer setup using TypeScript.

Contents
codecept.conf.js - main configuration file
features - Test Scenarios
pages - Page Objects
StepDefinition - Step Definition
output - reports directory

## Automation Setup

- Clone the repository:

```
git clone git clone https://github.com/bdurga2021/codeceptJS_Typescript.git
```
- Inside your project run the following to pull in all your dependencies:

```
npm install
```

- Compile and build the typeScript

```
npm run clean-build
```

## Automation Execution

```
npm run test
```

- Generate a reports

```
npm run report
```

## Execution by Cucumber Tags

- Cucumber execution by tags allows you to pick and choose what Scenarios to run.

Run only `@example` Scenarios

```
npm run clean && npm run build && codeceptjs run --steps --verbose  --plugins allure --grep @example

```
## Reports
```
<img width="1440" alt="Screen Shot 2021-11-01 at 11 19 51 PM" src="https://user-images.githubusercontent.com/93564605/139796977-31ea27db-0032-4575-85b5-ade54768fbb0.png">

```

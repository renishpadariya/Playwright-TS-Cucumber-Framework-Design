const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-json/cucumber.json',
  output: 'reports/html-report/index.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,

  metadata: {
    "App Version": "1.0.0",
    "Test Type": "BDD",
    "Framework": "Playwright + Cucumber",
    "Language": "TypeScript",
    "Browser": "Chromium"
  }
};

reporter.generate(options);

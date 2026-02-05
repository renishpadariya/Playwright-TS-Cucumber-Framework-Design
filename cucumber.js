module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: [
              'step_definitions/**/*.ts',
              'world/**/*.ts',
              'hooks/**/*.ts',
           ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'html:reports/html-report/report.html',
      'json:reports/cucumber-json/cucumber.json',
      
    ],
    publishQuiet: true,
  },
};

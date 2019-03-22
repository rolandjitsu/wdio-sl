// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
const capabilities = require('./browsers').map(capabilities => ({
  ...capabilities,
  // https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-Tagging
  tags: ['e2e', 'test'],
  // If using Open Sauce (https://saucelabs.com/opensauce),
  // capabilities must be tagged as "public" for the jobs's status
  // to update (failed/passed). If omitted on Open Sauce, the job's
  // status will only be marked "Finished."
  'public': true
}))

module.exports.config = {
  capabilities,
  sauceConnect: true,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  framework: 'jasmine',
  reporters: ['spec'],
  specs: ['./e2e/*.spec.js'],
  baseUrl: 'http://localhost:3000',
  services: ['sauce'],
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3
}

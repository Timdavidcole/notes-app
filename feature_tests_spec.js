require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Checkout Google.com', function () {
  let driver;
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Search on Google', async function() {
    await driver.get('http://www.postoffice.co.uk');
    await driver.findElement(By.id('head-search')).sendKeys('Hey James!', Key.RETURN);
    // await driver.findElement(By.id('tsf')).click();
    await driver.wait(until.elementLocated(By.id('rcnt')), 10000);

    let title = await driver.getTitle();
    assert.equal(title, 'cat - Google search');
  });
  after(() => driver && driver.quit());
});

require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Add note', function () {
  let driver;
  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  it('Adds a new note', async function() {
    // in line below, replace file path with your own file path
    await driver.get('file:///Users/student/Projects/notes-app/notes.html');
    await driver.findElement(By.id('newNoteText')).sendKeys('Hey Kareem!');
    await driver.findElement(By.id('addnotebutton')).click();
    await driver.wait(until.elementLocated(By.id('note_0')), 10000);

    let note = await driver.findElement(By.id('note_0')).getAttribute('textContent');
    // let note = await driver.getElementById('note_0').value;
    console.log(note)
    assert.equal(note, 'Hey Kareem!');
  });
  after(() => driver && driver.quit());
});

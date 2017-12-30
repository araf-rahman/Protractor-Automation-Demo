describe('Protractor Demo App', function() {
  const firstNumber = element(by.model('first'));
  const secondNumber = element(by.model('second'));
  const goButton = element(by.id('gobutton'));
  const latestResult = element(by.binding('latest'));
  const history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    browser.sleep(5000);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);
    browser.sleep(5000);
    expect(history.last().getText()).toContain('1 + 2'); // This is wrong!
  });
});

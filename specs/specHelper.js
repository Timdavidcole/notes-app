var SpecHelper = function() {

}

SpecHelper.prototype.describe = function(string, fn) {
  console.log(string);
  fn()
}

SpecHelper.prototype.it = function(string, fn) {
  console.log(string);
  fn()
}

SpecHelper.prototype.expect = function(variable1) {
  function toEqual(variable2) {
    console.log(variable1 === variable2 ? 'passed' : 'failed')
  }
}

var test = new SpecHelper();
test.expect(1).toEqual(1)

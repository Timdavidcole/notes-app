const describe = function(string, fn) {
  console.log(string);
  fn()
}

var it = function(string, fn) {
  console.log(string);
  fn()
}

var expect = function(exp) {
  return new ToEqual(exp)
}

var ToEqual = function(exp) {
  this.toEqual = function(ass) {
    console.log(exp === ass ? 'passed' : 'failed')
  }
}

const describe = function(string, fn) {
  console.log(string);
  fn()
}

var it = function(string, fn) {
  console.log(string);
  fn()
}




function expect(value) {
  return new Expect(value);
}
function eq(value) {
  return new Equal(value);
}
function include(value){
  return new Includes(value);
}
Expect = function(value) {
  this.value = value;

}
Expect.prototype.to = function( comparison) {
  if (comparison.compare(this.value)) {
    console.log("test passes :)");
    return "test passes :)";
  } else {
    console.log("test fails :(");
    return "test fails :("
  }
};
Equal = function(actual) {
  this.actual = actual;
}
Equal.prototype.compare = function(tocompare) {
  if(this.actual === tocompare) {
    return true
  } else {
    return false
  }
}

Includes = function(actual) {
  this.actual = actual;
}
Includes.prototype.compare = function(tocompare) {
  if (tocompare.includes(this.actual)) {
    return true
  } else {
    return false
  }
}
// started work on type matcher but to be honest we probably don't need it
//
// Typeof = function(actual) {
//   this.actual = actual;
// }
// Typeof.prototype.compare = function(tocompare) {
//   if
// }

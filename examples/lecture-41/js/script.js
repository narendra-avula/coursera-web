var message = "in global";
console.log("global: message = " + message);

function b () {
  console.log("b: message = " + message);
}

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);
  b();
}

a();

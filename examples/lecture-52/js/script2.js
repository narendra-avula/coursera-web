// (function (window) {
//   var johnGreeter = {};
//   johnGreeter.name = "John";
//   var greeting = "Hi ";
//   johnGreeter.sayHi = function () {
//     console.log(greeting + johnGreeter.name);
//   }
//
//   window.johnGreeter = johnGreeter;
//
// })(window);
//
//
//

// var name = 'Naidu';
// function sayHi() {
//   console.log("Hi " + name);
// }


(function (window) {
  var naiduGreeter = {}
  naiduGreeter.name = 'Naidu';
  var greeting = "Hi ";
  naiduGreeter.sayHi = function () {
    console.log(greeting + naiduGreeter.name);
  }

  window.naiduGreeter = naiduGreeter;
})(window);

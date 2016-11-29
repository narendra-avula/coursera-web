// yaakovGreeter.sayHello();
// johnGreeter.sayHi();
//
// // Immediately Invoked Function Expression
// // IIFE
// (function (name) {
//   console.log("Hello " + name);
// })("Coursera!");
//
//
//
//


narendraGreeter.sayHello();
naiduGreeter.sayHi();

// var a = function () {
//   console.log("Hello Narendra!");
// }
// a();

// Immediately Invoked Function Expression
// IIFE

// (function () {
//   console.log("Hello Narendra!");
// })();


// (function (name) {
//   console.log("Hello " + name);
// })("Naidu");

(function(window) {

  var obj = {};

  obj.dreamOn = function () {
   console.log("I want to see the global scope! Let me out!");
  };

  window.doer = obj;

})(window);

 doer.dreamOn();

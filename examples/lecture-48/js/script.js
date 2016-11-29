// Function constructors
function Circle (radius) {
  this.radius = radius;
  // console.log(this);
}

Circle.prototype.getArea =
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10); // New Object
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle.getArea());


// function test() {
//   console.log(this);
//   this.myName = 'Narendra Avula';
// }
// test();

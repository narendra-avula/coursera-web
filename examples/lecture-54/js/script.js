// Event handling

document.addEventListener("DOMContentLoaded",
  function (event) {
    function sayHello(event) {
      console.log(this);
      this.textContent = "Said it!!"
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + "!</h2>";
      document.getElementById("content").innerHTML = message;
      if (name === "naidu") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
      }
    }

    document.querySelector("button")
      .addEventListener("click", sayHello);
  }
);





// document.addEventListener("DOMContentLoaded",
//   function (event) {
//
//     function sayHello (event) {
//       this.textContent = "Said it!";
//       var name =
//        document.getElementById("name").value;
//        var message = "<h2>Hello " + name + "!</h2>";
//
//       document
//         .getElementById("content")
//         .innerHTML = message;
//
//       if (name === "student") {
//         var title =
//           document
//             .querySelector("#title")
//             .textContent;
//         title += " & Lovin' it!";
//         document
//             .querySelector("h1")
//             .textContent = title;
//       }
//     }
//
//     // Unobtrusive event binding
//     document.querySelector("button")
//       .addEventListener("click", sayHello);
//
//   }
// );



// document.querySelector("button")
//   .onclick = sayHello;

// DOM manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

function sayHello() {
  // alert("Narendra");
  var name = document.getElementById("name").value;
  console.log(name);
  var message = "<h2>Hello " + name + "!</h2>";
  console.log(message);

  document.getElementById("content").innerHTML = message;

  if (name === "naidu") {
    var title = document.querySelector("#title").textContent;
    title += " & Lovin' it!";
    document.querySelector("h1").textContent = title;
  }
}

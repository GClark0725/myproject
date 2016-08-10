var alphabet = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// var $nums = document.getElementsByName("nums");
// var $caps = document.getElementsByName("caps");
var $output = document.getElementById("output");
var i = 0;
var aray = [];
var $poptart = document.getElementById("poptart")

for (i = 0; i < 8; i++) {
  var test = alphabet[Math.floor(52*Math.random())]
  aray.push(test)
}

var join = aray.join("");

function update(element, content, klass) {
  var p = element.firstChild || document.createElement("p");

  p.textContent = content;
  element.appendChild(p);
  if (klass) {
    p.className = klass;

  }
}

update($output, join);

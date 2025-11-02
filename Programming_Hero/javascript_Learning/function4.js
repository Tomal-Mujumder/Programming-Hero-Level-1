const prompt = require("prompt-sync")();

function add(a, b) {
  return a + b;
}
var substraction = (a, b) => {
  if (a > b) return a - b;
  else return b - a;
};
var multiplication = (a, b) => {
  return a * b;
};
var divison = (a, b) => {
  if (a > b) return a / b;
  else return b / a;
};
function power(a, b, c) {
  let cal = a ** c + b ** c;
  return cal;
}

console.log("Enter your functionality:");
console.log(
  "1.Addition\n2.substraction\n3.Multiplication\n4.Divison\n5.Exponetial\nEnter your preferable number:"
);
let choice = parseInt(prompt());

console.log("Enter two number:");
const a = parseInt(prompt());
const b = parseInt(prompt());

switch (choice) {
  case 1:
    var addition = add(a, b);
    console.log(addition);
    break;
  case 2:
    var sub = substraction(a, b);
    console.log(sub);
    break;
  case 3:
    console.log(multiplication(a, b));
    break;
  case 4:
    console.log(divison(a, b));
    break;
  case 5:
    let c = prompt("Enter value of power:");
    var exponential = power(a, b, c);
    console.log(exponential);
    break;
  default:
    console.log("Null");
}

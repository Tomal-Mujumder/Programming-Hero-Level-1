
const prompt = require('prompt-sync')();

var mathematics = parseFloat(prompt("Enter your Mathematics marks: "));
var biology = parseFloat(prompt("Enter your Biology marks: "));
var chemistry = parseFloat(prompt("Enter you Chemistry marks: "));
var physics = parseFloat(prompt ("Enter your Physics marks: "));
var bangla = parseFloat(prompt ("Enter your Bangla marks: "));

const average = (mathematics+biology+chemistry+physics+bangla)/5;
console.log(`Average number you get: ${average.toFixed(2)}`);

const prompt = require('prompt-sync')();

greet(name)
{
    console.log(name);
}
console.log("Enter your name: ");
let name = prompt();
greet(name);

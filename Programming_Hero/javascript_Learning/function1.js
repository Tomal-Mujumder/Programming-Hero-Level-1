
const prompt = require('prompt-sync')();

function greet(name)
{
    return name;
}
console.log("Enter your name: ");
let name = prompt();
let you = greet(name);
console.log(`Your name is ${you}`);
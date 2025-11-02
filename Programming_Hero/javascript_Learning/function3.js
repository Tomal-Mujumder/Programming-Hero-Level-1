const prompt = require('prompt-sync')();

let takeinfo = () =>
{
    console.log("Enter your name:");
    let name = prompt();
    return name;
}
let First_Name = takeinfo();
console.log(First_Name);
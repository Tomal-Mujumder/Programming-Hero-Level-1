
const prompt = require('prompt-sync')();

function takeinfo(aprove)
            {
                console.log("Enter your name: ");
                let name = prompt();
                console.log("Enter your age: ");
                let age = prompt();
                console.log("Enter your height: ");
                let height = prompt();
                console.log(`${name} is ${age} years old and his height is ${height}`);
            };
var aprove = prompt("are you older than 18? give me y or n");

if ( aprove == 'y')
{
    aprove = true;
    takeinfo(aprove);
}
else
{
    console.log("You are not allowed to register!!");
}
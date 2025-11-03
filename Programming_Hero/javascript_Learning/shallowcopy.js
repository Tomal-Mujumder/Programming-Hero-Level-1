//concept of copying array or object in js and how they store them using stack
//and heap memory

// const prompt = require('prompt-sync')();

// let person = {

//     name:prompt("Enter your name:"),
//     roll: prompt("Enter your roll:"),
//     section: prompt("Enter your section:"),
//     address:
//     {
//         city:"dhaka",
//         postal_code:"1230"
//     }
// }
// console.log(`${person.name} ${person.roll} ${person.section}`);

// let shallowCopy = {...person};
// shallowCopy.address.postal_code = "jay";
// console.log(`${person.address.postal_code}`);

// let deepCopy = JSON.parse(JSON.stringify(person));

// deepCopy.name = "jay";
// console.log(`${person.name}`);

const prompt = require("prompt-sync")();
let student = {
    name:prompt(),
    roll:parseInt(prompt()), //used parseInt to make input integer
    section:prompt(),
    mobile_Number:{
        parent_1:parseInt(prompt()),
        parent_2:parseInt(prompt())
    }
};

let course_taken ={
    courseId:parseInt(prompt()),
    ...student
};
console.log(`If you want to change something then write yes\n`);
var choice = prompt();
if(choice === "yes")
{
    console.log("Enter your parents mobile number:");
    course_taken.mobile_Number.parent_1 = parseInt(prompt());
    course_taken.mobile_Number.parent_2 = parseInt(prompt());
}
else console.log("you are registered");

console.log(student);
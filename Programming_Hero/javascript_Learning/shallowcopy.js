//concept of copying array or object in js and how they store them using stack
//and heap memory

const prompt = require('prompt-sync')();

let person = {

    name:prompt("Enter your name:"),
    roll: prompt("Enter your roll:"),
    section: prompt("Enter your section:"),
    address:
    {
        city:"dhaka",
        postal_code:"1230"
    }
}
console.log(`${person.name} ${person.roll} ${person.section}`);

let shallowCopy = {...person};
shallowCopy.address.postal_code = "jay";
console.log(`${person.address.postal_code}`);

// let deepCopy = JSON.parse(JSON.stringify(person));

// deepCopy.name = "jay";
// console.log(`${person.name}`);

const takeinput = require(`prompt-sync`)();

let givenNumber = parseInt(takeinput("Enter an integer number: "));
const remainder = givenNumber % 5;
console.log(`Remainder of given number: ${remainder}`);
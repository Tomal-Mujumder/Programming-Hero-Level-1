

const prompt = require("prompt-sync")();
var studentRoll = [1,2,3,4,5]

// var studentName = {
//     student1:prompt(),
//     student2:prompt()
// };

studentRoll.push(19,29,39);
//console.log(studentRoll);
//console.log(studentRoll.length);

//studentRoll.pop();
//studentRoll.shift();

studentRoll.unshift(20,10,10);

let search = studentRoll.includes(39);
if(search)console.log("present\n");
else console.log("absent\n");
console.log(studentRoll);

console.log(studentRoll.length);

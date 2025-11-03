

const prompt = require("prompt-sync")();
var studentRoll = [1,2,3,4,5]

var studentName = {
    student1:prompt(),
    student2:prompt()
};

console.log(studentRoll.length);

studentRoll.push(19,29,39);
console.log(studentRoll);
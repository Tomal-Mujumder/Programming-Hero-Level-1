
// const person = ["tomal","jay","asif"];

// const copyperson = [...person];
// console.log(copyperson);

// function me(a,b,c)
// {
//     console.log(`${a}+${b}+${c}`);
// }
// me(...copyperson);

var starcopy = ["me", "myself", "you"]

var distar = ["short", "cute", "golu"]

var how = [...starcopy,...distar]

//using arrow function and foreach

// how.forEach(element => {
//     console.log(element);
// });

// function me(a,b,c)
// {
//     console.log(`${a} ${b} ${c}`);
// }

// me(...distar);

var studentInfo = {name:"tomal",id:2,age:25,profession:"IT"};

var newStudentList = {...studentInfo};

//Object.values extract value of object property and store as an array

var array = Object.values(newStudentList);

function obj(a,b,c)
{
    console.log(`${a} ${b} ${c}`);
}

obj(...array);
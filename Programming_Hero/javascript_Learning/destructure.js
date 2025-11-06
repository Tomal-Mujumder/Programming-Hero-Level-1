
//destructure use for object re-structuring

var me = ["tomal", "mai" , "jay"];

const [person1,person2] = me;

// console.log(`${person1},${person2}`);

var studentInfo = {name:"tomal",profession:"student",
    age:24,id:2
}

const {name,profession} = studentInfo;
console.log(`${name},${profession}`);


//const{yo,ha} = studentInfo;
// we can't use it as studentInfo has no property like yo and ha
// if we want to use customize property then we need to change it

//this is way to change property name
//const{name:yo,profession:ha} = studentInfo;
//console.log(`${yo},${ha}`);


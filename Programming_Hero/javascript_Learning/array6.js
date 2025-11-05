
// var array = [1,2,3,4,5]

// var testReduce = array.reduce((holdsResult,currentValue)=>{
//             return holdsResult+currentValue;
// },0);

// console.log(testReduce);

// var array = [{name:"tomal",age:25},{name:"asif",age:23}]

// var testingReduce = array.reduce((holds,current)=>{
//     if(current.name==="asif") return current;
//     else return "null";
// },{});

// console.log(testingReduce);

//we can use reduce for finding value as well as creating new array.
//suppose we have multiple database from which need to extract some features and make a new table
//so reduce could be a good way to done this task

var array = [{name:"tomal",profession:"coder",id:5},
    {name:"maisha",profession:"student",id:4},
    {name:"rony",profession:"student",id:1}
]

// let newtable = array.reduce((holder,currentvalue)=>{
//     let x = currentvalue.profession;
//     holder[x] = (holder[x] || 0)+1;
//     return holder;
// },{});

// console.log(newtable);

let newarreay = array.reduce((accu,current)=>{
    let x = current.name;
    return accu +"-"+ x;
},'')
console.log(newarreay);
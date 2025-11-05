
// var array = [1,2,3,4,5]

// var testReduce = array.reduce((holdsResult,currentValue)=>{
//             return holdsResult+currentValue;
// },0);

// console.log(testReduce);

var array = [{name:"tomal",age:25},{name:"asif",age:23}]

var testingReduce = array.reduce((holds,current)=>{
    if(current.name==="asif") return current;
    else return "null";
},{});

console.log(testingReduce);
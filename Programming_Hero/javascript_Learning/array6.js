
var array = [1,2,3,4,5]

var testReduce = array.reduce((holdsResult,currentValue)=>{
            return holdsResult+currentValue;
},0);

console.log(testReduce);
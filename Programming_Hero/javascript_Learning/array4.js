
var array = [{name:"tomal",age:23},
    {name:"maisha",age:21},
    {name:"arnob",age:3}
]
let searchindex;
var search = array.find((value,index)=>
{
    if(value.name==="arnob")
    {
        searchindex = index;
        return value;
    }
});
console.log(`Index Number: ${searchindex}`);
console.log(search);

var array = [{name:"tomal", profession:"student", id:4},
    {name:"maisha", profession:"student", id:5}
]

var person = {name:"tomal", profession:"student",id:5}
// for(let i in person)
// {
//     console.log(i);
// }
//let array = [1,12,3]
let count=0;
for (let i in array)
{
    if(array[i].profession == "student") count+=1;
    //console.log(array[i]);
}
console.log(count);
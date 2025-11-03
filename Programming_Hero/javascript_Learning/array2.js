
let me = ["tomal","maisha","kids"]

var searchIndex=0;

var search = me.find((yo,index)=>
{

    if(yo==="maisha")
        {
            searchIndex=index;
            return yo;
        }
});
console.log(search);
console.log(searchIndex);
// const users = [
//   { name: 'Alice', age: 20 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 }
// ];

// // The callback function returns true for the first matching element
// const firstAdult = users.find( (user, index) => {
//   console.log(`Checking index ${index}: ${user.age}`);
//   return user.age >= 25; // Condition to test
// });

// console.log(firstAdult); 
// // Output: { name: 'Bob', age: 25 }
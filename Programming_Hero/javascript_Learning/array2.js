
// let me = ["tomal","maisha","kids"]

// var searchIndex=0;

// var search = me.find((yo,index)=>
// {

//     if(yo==="maisha")
//         {
//             searchIndex=index;
//             return yo;
//         }
// });
// console.log(search);
// console.log(searchIndex);

var family = ["tomal", "maisha", "kids"]

let searchIndex = 0;

var search = family.find((search,index)=>
{
    if(search === "maisha")
    {
        searchIndex = index;
        return search;
    }
});
console.log(`Her name is ${search} and positon at array ${searchIndex}`);
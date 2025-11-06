

var array = ["tomal","maisha","adib"]

var [name,...rest] = array;

// console.log(name);
// console.log(rest);

function me(...rest)
{
    rest.forEach(element => {
        console.log(element);
    });
}
me("tomal","maisha","adib");
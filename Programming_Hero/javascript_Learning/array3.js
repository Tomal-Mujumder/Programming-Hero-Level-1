
// var mai = [40,3,69]

// var search = mai.sort((a,b)=>a-b);

// console.log(search);

// var me = [{name:"Tomal",religion:"Hindu",age:27},
//     {name:"Maisha",religion:"Islam",age:21},
//     {name:"arti",religion:"beliver",age:3}]
// var search = me.sort((a,b)=>a.age-b.age);
// console.log(search);

let search = [{ProductName:"watch",Productcatagory:"Men",ProductPrice:"2000tk"},
    {ProductName:"Graphics Tablet", Productcatagory:"Unisex",ProductPrice:"3900"},
    {ProductName:"Headset",ProductCatagory:"Unisex",ProductPrice:"1400"}
]

var arraySorting = search.sort((a,b)=>a.ProductPrice-b.ProductPrice);
console.log(arraySorting);
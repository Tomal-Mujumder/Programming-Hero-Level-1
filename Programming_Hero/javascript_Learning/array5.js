
// var array = [{name:"milestone",address:"sector-6",studenNumber:2330},
//     {name:"rajuk",address:"sector-7",studentNumber:3330}]

// var search = array.map((value,index,response)=>
// {
//     const greater = value.studentNumber<3000;
//     return greater;
// });
// console.log(search);
// console.log(array[1]);

var ami = [{name:"tomal", age:50}, {name:"mim",age:35}]

var search = ami.map((value,index,arr)=>
{
    if(value.age>40)return value;
    else return 0;
});
console.log(search);
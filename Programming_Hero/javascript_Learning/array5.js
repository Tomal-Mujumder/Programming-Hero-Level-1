
var array = [{name:"milestone",address:"sector-6",studenNumber:2330},
    {name:"rajuk",address:"sector-7",studentNumber:3330}]

var search = array.map((value,index,response)=>
{
    const greater = value.studentNumber<3000;
    return greater;
});
console.log(search);
console.log(array[1]);
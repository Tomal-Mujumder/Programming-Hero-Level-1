
const person = ["tomal","jay","asif"];

const copyperson = [...person];
console.log(copyperson);

function me(a,b,c)
{
    console.log(`${a}+${b}+${c}`);
}
me(...copyperson);
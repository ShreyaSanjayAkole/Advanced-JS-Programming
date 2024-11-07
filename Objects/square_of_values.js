let obj = {}
let input = prompt("enter numner: ");

for(let i = 1;i<=input;i++)
{
    obj[i] = i*i;
}

console.log(obj)
delete obj[5];
console.log(obj)
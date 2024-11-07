let obj = {
    100 : 1,
    65: 5,
    22: 3,
    64: 2,
    10:4
};

let result = Object.entries(obj).sort((a,b) => a[0]-b[0]);
let final = Object.fromEntries(result);

console.log(final);
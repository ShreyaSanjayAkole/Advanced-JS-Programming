let obj = {
    'a': 1,
    'b': 5,
    'c': 3,
    'd': 2,
    'e':4
};

let result = Object.entries(obj).sort((a,b) => a[1] - b[1]);

let final = Object.fromEntries(result);
console.log(final);
let obj = {
    "a":"S001",
    "b": "S002",
    "c": "S001",
    "d": "S005",
    "e":"S005",
    "f":"S009",
    "g":"S007"
}

let value = Object.values(obj);
let result = new Set(value);

console.log(result)
// shallow copy
let obj1 = { name: "Alice", address: { city: "New York" } };
let obj2 = { ...obj1 }; 

obj2.name = "Bob";
obj2.address.city = "Los Angeles"; 

console.log(obj1.name);
console.log(obj1.address.city);


/*deep copy
let obj1 = { name: "Alice", address: { city: "New York" } };
let obj2 = structuredClone(obj1);

obj2.address.city = "Los Angeles";

console.log(obj1.address.city); // Output: New York (no change in original object)*/


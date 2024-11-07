let user = {};

Object.defineProperty(user, "name", {
    value: "Alice",
    writable: false,    
    enumerable: true,   
    configurable: false 
});

console.log(user.name); 

user.name = "Bob"; 

for (let key in user) {
    console.log(key);
}

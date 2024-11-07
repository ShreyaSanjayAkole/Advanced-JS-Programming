let user = {
    firstName: "Shreya",
    lastName: "Akole",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        let parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(user.fullName);

user.fullName = "Bob Smith";
console.log(user.firstName); 
console.log(user.lastName);  

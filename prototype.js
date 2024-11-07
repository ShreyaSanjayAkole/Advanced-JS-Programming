const employee = {
    caltax(){
        console.log("tax is 10%");
    }
};

const newemp = {
    salary : 50000
};

newemp.__proto__ = employee;
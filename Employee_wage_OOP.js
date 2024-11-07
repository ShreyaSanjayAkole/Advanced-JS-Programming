
class Employee {
    constructor(name) {
        this._name = name;  // Encapsulated
        this.WAGE_PER_HOUR = 20;
    }

    // Getter for employee name (encapsulation)
    get name() {
        return this._name;
    }

    // Abstract method: Must be overridden in subclasses
    getWorkingHours() {
        throw new Error("This method must be overridden by subclasses.");
    }

    calculateDailyWage(hours) {
        return this.WAGE_PER_HOUR * hours;
    }
}

class FullTimeEmployee extends Employee {
    constructor(name) {
        super(name); 
        this.FULL_TIME_HOURS = 8;
    }

    getWorkingHours() {
        return this.FULL_TIME_HOURS;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name) {
        super(name);
        this.PART_TIME_HOURS = 4;
    }

    getWorkingHours() {
        return this.PART_TIME_HOURS;
    }
}

// Class to Calculate Wages (Abstraction)
class EmployeeWageCalculator {
    constructor() {
        this.MAX_WORKING_HOURS = 100;
        this.WORKING_DAYS_PER_MONTH = 20;
    }

    checkAttendance() {
        const attendance = Math.floor(Math.random() * 3);
        return attendance === 1 ? "Full_time" : attendance === 2 ? "Part_time" : "Absent";
    }

    calculateWages(employee) {
        let totalWorkingHours = 0;
        let dailyWages = [];
        let absentDays = 0;
        let totalWorkingDays = 0;

        while (
            totalWorkingHours < this.MAX_WORKING_HOURS &&
            totalWorkingDays < this.WORKING_DAYS_PER_MONTH
        ) {
            const status = this.checkAttendance();
            let dailyWage = 0;

            switch (status) {
                case "Full_time":
                    dailyWage = employee.calculateDailyWage(employee.getWorkingHours());
                    totalWorkingHours += employee.getWorkingHours();
                    break;

                case "Part_time":
                    dailyWage = employee.calculateDailyWage(employee.getWorkingHours());
                    totalWorkingHours += employee.getWorkingHours();
                    break;

                default:
                    absentDays++;
                    break;
            }

            dailyWages.push(dailyWage);
            totalWorkingDays++;
        }

        const wagePerMonth = dailyWages.reduce((total, wage) => total + wage, 0);
        return {
            employeeName: employee.name,
            dailyWages,
            absentDays,
            totalWorkingDays,
            totalWorkingHours,
            wagePerMonth,
        };
    }

    displayResult(results) {
        console.log(`\nEmployee: ${results.employeeName}`);
        console.log(`Daily Wages: ${results.dailyWages}`);
        console.log(`Absent Days: ${results.absentDays}`);
        console.log(`Total Working Days: ${results.totalWorkingDays}`);
        console.log(`Total Working Hours: ${results.totalWorkingHours}`);
        console.log(`Total Wage for the Month: ${results.wagePerMonth}`);
    }
}


const fullTimeEmployee = new FullTimeEmployee("Shreya");
const partTimeEmployee = new PartTimeEmployee("Sam");

const wageCalculator = new EmployeeWageCalculator();


const fullTimeResults = wageCalculator.calculateWages(fullTimeEmployee);
wageCalculator.displayResult(fullTimeResults);


const partTimeResults = wageCalculator.calculateWages(partTimeEmployee);
wageCalculator.displayResult(partTimeResults);

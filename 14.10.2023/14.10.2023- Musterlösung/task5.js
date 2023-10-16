// Employee Management System:
// Build an Employee class with attributes like name, age, and designation. Include methods for setting and getting employee details, as well as calculating the salary based on different parameters.

class Employee {
    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    // Method to set employee details
    setDetails(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    // Method to get employee details
    getDetails() {
        return {
            name: this.name,
            age: this.age,
            designation: this.designation,
        };
    }

    // Method to calculate salary
    calculateSalary() {
        let baseSalary = 50000; // Default base salary
        let salary = 0;

        // Salary calculation based on designation
        switch (this.designation.toLowerCase()) {
            case "manager":
                salary = baseSalary + 10000;
                break;
            case "developer":
                salary = baseSalary + 5000;
                break;
            case "designer":
                salary = baseSalary + 3000;
                break;
            default:
                salary = baseSalary;
        }

        // Bonus calculation based on age
        if (this.age > 40) {
            salary += 5000;
        } else if (this.age > 30) {
            salary += 3000;
        } else {
            salary += 1000;
        }

        return salary;
    }
}

// Example usage
const employee = new Employee("John Doe", 35, "Manager");
console.log(employee.getDetails());
console.log("Salary: $" + employee.calculateSalary());
employee.setDetails();

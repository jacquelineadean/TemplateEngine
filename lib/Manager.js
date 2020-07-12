// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Include Employee class
const Employee = require("./Employee");

// Manager class extends from Employee parent class
class Manager extends Employee {
    // Property specific to Intern
    constructor(name, id, email, officeNumber){
        // Call the properties and methods from Employee
        super(name, id, email);
        // Office Number property
        this.officeNumber = officeNumber;
    }
    // Methods
    getOfficeNumber(){
        return this.officeNumber;
    }
    // Override role to return Manager
    getRole(){
        return "Manager";
    }
}

// Export the Manager class
module.exports = Manager;
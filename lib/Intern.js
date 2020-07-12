// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Include Employee class
const Employee = require("./Employee");

// Intern class extends from Employee parent class
class Intern extends Employee {
    // Property specific to Intern
    constructor(school){
        // Call the properties and methods from Employee
        super(name, id, email);
        // School Property
        this.school = school;
    }
    // Methods
    getSchool(){
        return this.school;
    }
    // Override role to return Intern
    getRole(){
        return "Intern";
    }
}

// Export the Intern class
module.exports = Intern;
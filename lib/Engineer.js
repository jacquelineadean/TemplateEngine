// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Include Employee class from different module
const Employee = require("./Employee");

// Engineer class extends from Employee parent class
class Engineer extends Employee {
    // Property specific to Engineer
    constructor(github){
        // Call the properties and methods from Employee
        super(name, id, email);
        // Github Property
        this.github = github;
    }
    // Methods
    getGithub(){
        return this.github;
    }
    // Override role to return Engineer
    getRole(){
        return "Engineer";
    }
}

// Export the Engineer class
module.exports = Engineer;
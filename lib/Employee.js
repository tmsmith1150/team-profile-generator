// TODO: Write code to define and export the Employee class
class Employee {
    constructor(role, name, id, email) {
      this.role = role;
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
      console.log(this.role);
      console.log(this.name);
    }
  }
  module.exports = Employee;
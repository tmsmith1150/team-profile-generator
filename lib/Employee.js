// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    printInfo() {
       
      
      console.log(this.name);
    }
  }
  module.exports = Employee;
class Employee{
    constructor(name, id, email){
     this.id = id,
     this.email = email;
     this.name = name;
     this.role = "Employee";
  }
    getName(){ return this.name}
    getRole(){ return this.role }  
    getId(){ return this.id}
    getEmail(){ return this.email}
  }
  
  module.exports = Employee;
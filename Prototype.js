var employee = function() {
    this.name = 'Swati';
    this.salary = 25000;
    this.address = 'Pune';
  };
  
  employee.prototype.setName = function(name) {
    this.name = name;
  };
  
  employee.prototype.setSalary = function(salary) {
    this.salary = salary;
  };
  
  employee.prototype.setAddress = function(address) {
    this.address = address;
  };
  
  employee.prototype.save = function() {
    console.log("Name : "+this.name+"\nSalary : "+this.salary+"\nAddress : "+this.address);
  };

var newObj = new employee();

newObj.setName('Swati Desale');
newObj.setSalary(30000);
newObj.setAddress('Dhule');

newObj.save();
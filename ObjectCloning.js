function copy(src) {
    var dest = new Object();

    for(key in src) 
        dest[key] = src[key];

    return dest;
}

var emp = new Object();
emp.id = 1;
emp.name = "Swati";
emp.salary = 10000;

print("Employee Details : ");
var result = copy(emp);
print(emp.id+" "+emp.name+" "+emp.salary);

/*function showName(firstName,lastName) {
    var fullname = "Your name is : ";

    function fullName() {
        return fullname+firstName+" "+lastName;
    }

    return fullName();
}

var result = showName("Swati","Desale");
print(result);*/

function employee(name,salary,addr) {
    var details = "Employee Details : ";

    function address() {
        return details+"\nName :  "+name+"\nSalary : "+salary+"\nAddress : "+addr;
    }

    return address();
}

var data = employee("Swati",25000,"Pune");
print(data);
var class1 = function() {
    this.result = 0;
    this.add = function(input) {
        this.result = this.result + input;
        return this.result;
    }

    this.sub = function(input) {
        this.result = this.result - input;
        return this.result;
    }

    this.print = function() {
        console.log("Result : "+this.result);
    }
}

var obj = new class1();
obj.add(5);
obj.sub(2);
obj.print();


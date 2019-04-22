function Stack(){
    this.stack = [];

    this.push = function(val){
        this.stack.push(val);
        return this;
    }

    this.pop = function(){
        return this.stack.pop();
    }

    this.top = function(){
        if (this.stack[0]){
            return this.stack[this.stack.length-1];
        }
        return undefined;
    }

    this.isEmpty = function(){
        return !this.stack.length;
    }

    this.size = function(){
        return this.stack.length;
    }

    this.contains = function(val){
        for (var i = 0; i < this.stack.length; i++){
            if (this.stack[i] == val){
                return true;
            }
        }
        return false;
    }
}

var st1 = new Stack();
console.log(st1.size()); // 0
console.log(st1.isEmpty()); // true
console.log(st1.top()); // undefined
console.log(st1.contains(10)); // false
st1.push(10); 
st1.push(20); 
console.log(st1.contains(10)); // true
console.log(st1.contains(20)); // true
console.log(st1.contains(30)); // false
console.log(st1.size()); // 2
console.log(st1.isEmpty()); // false
console.log(st1.top()); // 20
console.log(st1.pop()); // 20
st1.pop();
console.log(st1.size()); // 0
console.log(st1.isEmpty()); // true
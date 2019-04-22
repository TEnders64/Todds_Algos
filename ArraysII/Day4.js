// Fibonacci
function fib(n){
    if (n <= 1) { return 0; }
    if (n == 2) { return 1; }
    var runningFib = 1;
    var prevFib = 1;
    for (var i = 3; i < 5; i++){
        var temp = runningFib; // 2
        runningFib += prevFib; // 3
        prevFib = temp; // 2
    }
    return runningFib;
}

console.log(fib(3)); // 1
console.log(fib(4)); // 2
console.log(fib(5)); // 3
console.log(fib(6)); // 5
console.log(fib(7)); // 8

// Median of Sorted Arrays: given [1,3,5] and [1,5,7,9] => 5
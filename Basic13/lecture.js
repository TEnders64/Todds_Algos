function print1to255(){
    for(var i = 1; i <= 255; i++){
        console.log(i);
    }
    // outside the for loop. for loop is finished
    console.log(i);
}

print1to255();

// for ( A> start ; B> end ; D> increment/make progress){
//     //C> what do we want to repeat?
// }

function printIntsAndSum0To255(){
    var sum = 0;
    for(var i = 0; i < 256; i++){
        sum += i;
        console.log(i, sum);
    }
}
printIntsAndSum0To255();

for(var i = 1; i <= 255; i++){
    console.log(i);
}

var i = 1;
while(i <= 255){
    console.log(i);
    i++;
}

var x = 10;
if (x == 6){
    // code to execute
    console.log("Hello");
} else if (x != 10){
    console.log("World");
} else {
    console.log("EVERYTHING ELSE!");
}

var nums = [5, 4, -3, 0, 1, 99, 101];
console.log(nums[2]); // -3
console.log(nums.length); // 6
nums[2] = 3; // [5, 4, 3, 0, 1, 99];
nums.push(55); // [5, 4, 3, 0, 1, 99, 55]

function tester(outsideInfo){
    return "Hello"+outsideInfo; // "HelloVeronica"
}

console.log(tester("Veronica"));
console.log(tester("Matthew"));


// nested for loops
for (var outer = 10; outer > 7; outer--){
    console.log("outer", outer); // outer 10
    for (var inner = 1; inner < 4; inner++){
        console.log("inner", inner); // inner 1
    }
}
// outer 10 
// inner 1
// inner 2
// inner 3
// outer 9
// inner 1
// inner 2
// inner 3
// outer 8
// inner 1
// inner 2 
// inner 3

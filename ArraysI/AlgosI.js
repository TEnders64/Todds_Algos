var myArr = [2,4,6,8,10,12];
// var temp = myArr[0]; // preserve the value that's about to be lost  2
// myArr[0] = myArr[3]; // copying a value from index 3 to index 0 8 -> 2
// myArr[3] = temp; // the 2 goes where the 8 was

// var temp2 = myArr[1]; // 4
// myArr[1] = myArr[2]; // copying 6 onto the 4
// myArr[2] = temp2; // the 4 goes where the 6 was

// console.log(myArr);
// output => [8,6,4,2]
function reverse(arr){
    // we want to swap values for half as many times as there are values in the array
    for (var i = 0; i < arr.length/2; i++){
        // swap values
        var temp = myArr[i]; 
        myArr[i] = myArr[arr.length-1-i]; 
        myArr[arr.length-1-i] = temp; 
    }
}
reverse(myArr);
console.log(myArr);

/////////////////////////////////////////////////////////////////
function reverse1(arr){
    var newArr = [];
    for (var i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverse1([1,2,3,4]))

// arr = [1,2,3,4]
// newArr = [4]
// ===> [4,3,2,1] in a new array
// i = 2
// arr[i] = 3
// Binary Search a Sorted Array
function binarySearch(arr, val){
    var left = 0;
    var right = arr.length-1;
    while (left <= right){
        var guessIdx = Math.floor((right+left) / 2);
        var guessVal = arr[guessIdx];
        if (guessVal == val){
            return true;
        }
        if (guessVal < val){
            left = guessIdx+1;
        }else{
            right = guessIdx-1;
        }
    }
    return false;
}

console.log(binarySearch([0,1,2,3,4,5,6], 0)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 1)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 2)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 3)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 4)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 5)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 6)); //true
console.log(binarySearch([0,1,2,3,4,5,6], 1.5)); //false
console.log(binarySearch([0,1,2,3,4,5,6], -1)); //false
console.log(binarySearch([0,1,2,3,4,5,6], 7)); //false
function minToFront(arr){
    var minIdx = 0;
    //determine the minimum index position, because we'll be moving values, not just saying what the min is
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < arr[minIdx]){
            minIdx = i;
        }
    }
    //take the minimum value and set in temp variable for insertion later
    var minVal = arr[minIdx];
    //loop from the minimum index to the front and copy from left to right
    for (var j = minIdx; j > 0; j--){
        arr[j] = arr[j-1];
    }
    arr[0] = minVal;
}

var xyz = [4,2,5,3,1];
minToFront(xyz);
console.log(xyz);

function reverse(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}
var abc = [1,2,3,4,5];
var def = [1,2,3,4,5,6];
reverse(abc);
reverse(def);
console.log(abc);
console.log(def);
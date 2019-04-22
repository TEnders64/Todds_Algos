// BalancePoint return true/false if there is a point in an array
// between indexes where the sum to the left == sum to the right
function balancePoint(arr){
    for (var i = 1; i < arr.length; i++){
        var left = 0;
        var right = 0;
        for (var leftidx = 0; leftidx < i; leftidx++){
            left += arr[leftidx];
        }
        for (var rightidx = i; rightidx < arr.length; rightidx++){
            right += arr[rightidx];
        }
        if (left == right){
            return true;
        }
    }
    return false;
}

console.log(balancePoint([1,2,3,4,10])); //true
console.log(balancePoint([1,2,4,2,1])); //false
console.log(balancePoint([1,2,4,4,2,1])); //true
console.log(balancePoint([-1,2,1])); //true
console.log(balancePoint([1,1])); //true
console.log(balancePoint([0,1])); //false
console.log(balancePoint([100,99,0,1])); //true
console.log(balancePoint([-50,99,-50])); //false

// BalanceIndex return the index in which an array has an equal
// sum to the left and right of the index. -1 if there isn't one.
function balanceIndex(arr){
    for(var i = 1; i < arr.length; i++){
        var left = 0;
        var right = 0;
        for (var leftidx = 0; leftidx < i; leftidx++){
            left += arr[leftidx];
        }
        for (var rightidx = i+1; rightidx < arr.length; rightidx++){
            right += arr[rightidx];
        }
        if (left == right){
            return i;
        }
    }
    return -1;
}
console.log(balanceIndex([-2,5,7,0,3])); // 2
console.log(balanceIndex([-2,5,7,0,3,7])); // 3
console.log(balanceIndex([1,9,0,10])); // 2
console.log(balanceIndex([10,9,10])); // 1
console.log(balanceIndex([9,9])); // -1
console.log(balanceIndex([1,9,10])); // -1
console.log(balanceIndex([1,0,9,10])); // -1
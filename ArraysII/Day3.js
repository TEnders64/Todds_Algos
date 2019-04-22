// Flatten an array of nested arrays
function flatten(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (typeof(arr[i]) == 'object'){
            for (var j = 0; j < arr[i].length; j++){
                newArr.push(arr[i][j]);
            }
        }else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flatten([1,2,[3,4],[],5]));

// Remove Duplicates of an Array
function removeDupes(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        var found = false;
        for (var j = 0; j < newArr.length; j++){
            if (newArr[j] == arr[i]){
                found = true;
            }
        }
        if (!found){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDupes([1,2,1,3,4,2])); // [1,2,3,4]

// how to use isArray()
console.log(Array.isArray([1,2,3]));
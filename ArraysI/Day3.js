//InsertAt and RemoveAt

function insertAt(arr, idx, val){
    if (idx >= 0){
        for (var i=arr.length; i > idx; i--){
            arr[i] = arr[i-1];
        }
        arr[idx] = val;
    }
}

var myArr = [1,2,3];
insertAt(myArr, 5, 4);
console.log(myArr);

function removeAt(arr, idx){
    if (idx >= 0 && idx < arr.length){
        var temp = arr[idx];
        for (var i = idx; i < arr.length; i++){
            arr[i] = arr[i+1];
        }
        arr.length--;
        return temp;
    }
    return null;
}
// removeAt(myArr,3);
// console.log(myArr);
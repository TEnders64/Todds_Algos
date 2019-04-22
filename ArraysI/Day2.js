//pushFront and popFront

function pushFront(arr, val){
    for (var i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
}

var myArr = [1,2,3];

pushFront(myArr, 4);
console.log(myArr);

function popFront(arr){
    var temp = arr[0];
    if (arr.length > 0){
        for (var i = 1; i < arr.length; i++){
            arr[i-1] = arr[i];
        }
        arr.length--;
    }
    return temp;
}

var myArr2 = [1,2,3];
console.log(popFront(myArr2));
console.log(myArr2);
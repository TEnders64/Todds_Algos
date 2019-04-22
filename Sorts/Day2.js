//Selection Sort
function selectionSort(arr){
    for (var i = 0; i < arr.length; i++){
        var maxIdx = 0;
        for (var j = 1; j < arr.length-i; j++){
            if (arr[j] > arr[maxIdx]){
                maxIdx = j;
            }
        }
        var temp = arr[arr.length-i-1];
        arr[arr.length-i-1] = arr[maxIdx];
        arr[maxIdx] = temp;
    }
}
var arr1 = [5,3,1,6,2,0,4];
selectionSort(arr1);
console.log(arr1);
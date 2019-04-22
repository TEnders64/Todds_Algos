//Bubble Sort
function bubbleSort(arr){
    var arrSize = arr.length;
    do {
        var swap = false;
        for (var i = 0; i < arrSize; i++){
            if (arr[i] > arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swap = true;
            }
        }
        arrSize--;
    } while(swap);
}
var arr1 = [0,1,2,3,4,5];
var arr2 = [3,1,5,2,4,0];
bubbleSort(arr1);
bubbleSort(arr2);
console.log(arr1);
console.log(arr2);
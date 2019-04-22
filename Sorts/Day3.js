//Insertion Sort

function insertionSort(arr){
    for (var i = 1; i < arr.length; i++){
        var num = arr[i];
        var runner = i;
        while (num < arr[runner-1] && runner > 0){
            arr[runner] = arr[runner-1];
            runner--;
        }
        arr[runner] = num;
        console.log(arr);
    }
}

var arr1 = [5,2,4,3,0,1];
insertionSort(arr1);
console.log(arr1);
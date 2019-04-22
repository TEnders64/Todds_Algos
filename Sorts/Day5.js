//Quick Sort w/ Partition

function partition(arr, start, end){
    var partIdx = start;
    var num = arr[start];
    for (var i = start; i < end; i++){
        if (arr[i] < num){
            partIdx++;
            var temp = arr[i];
            arr[i] = arr[partIdx];
            arr[partIdx] = temp;
        }
    }
    arr[start] = arr[partIdx];
    arr[partIdx] = num;
    return partIdx;
}

function quicksort(arr, start=0, end=arr.length){
    if ((end - start) > 0){
        var pivot = partition(arr,start,end);
        console.log(arr);
        quicksort(arr,start,pivot);
        quicksort(arr,pivot+1,end);
    }
}
var arr1 = [5,2,6,7,1,3,0,23,41,36,-5,-2,9,19,-24,20,8,6,15];
quicksort(arr1);
console.log(arr1);
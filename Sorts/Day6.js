//Merge Sort

function merge(arr1, arr2){
    var newArr = [];
    var idx1 = 0;
    var idx2 = 0;
    console.log(arr1, arr2);
    while (idx1 < arr1.length && idx2 < arr2.length) {
        if (arr1[idx1] < arr2[idx2]){
            newArr.push(arr1[idx1]);
            idx1++;
        } else {
            newArr.push(arr2[idx2]);
            idx2++;
        }
    }
    while (idx1 < arr1.length){
        newArr.push(arr1[idx1++]);
    }
    while (idx2 < arr2.length){
        newArr.push(arr2[idx2++]);
    }
    console.log("Merged Array:",newArr);
    return newArr;
}

// console.log(merge([2,5,6], [1,3,4,7]));
// [1,2,3,4,5,6,7];

function mergesort(arr){
    var left = arr.slice(0, Math.floor(arr.length/2));
    var right = arr.slice(Math.floor(arr.length/2), arr.length);
    if (arr.length > 1){
        console.log(left);
        console.log(right);
        left = mergesort(left);
        right = mergesort(right);
    } else {
        return arr;
    }
    
    return merge(left,right);

}

console.log(mergesort([2,5,6,1,3,4,7,-2]));
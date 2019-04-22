function swapPairs(arr){
    for (var i = 0; i < arr.length; i+=2){
        if (arr[i+1] != undefined){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
}

var x = [1,2,3,4,5];
var y = [1,2,3,4,5,6];

swapPairs(x);
swapPairs(y);
// console.log(x);
// console.log(y);

function removeDupesWithNewArray(arr){
    var newArr = [];
    newArr.push(arr[0]);
    for (var i = 1; i < arr.length; i++){
        if (arr[i] != newArr[newArr.length-1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var list = [1,2,2,2,3,3,4];
var newList = removeDupesWithNewArray(list);
// console.log(newList);

function removeDupes(arr){
    var index = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] != arr[index]){
            index++;
        }else{
            //loop and remove duplicates in front of us
            var seeker = index;
            while (arr[seeker] == arr[seeker+1]){
                //copy all values left and do a .pop()
                for (var sweeper = seeker; sweeper < arr.length; sweeper++){
                    arr[sweeper] = arr[sweeper+1];
                }
                arr.pop();
            }
        }
    }
}

var list2 = [1,2,2,2,3,3,3,3,3,4];
removeDupes(list2);
console.log(list2);
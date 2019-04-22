// Rainwater Terraces
function makeItRain(arr){
    var downwardChange = false;
    var highPoint = arr[i];
    var rainWater = 0;
    for (var i = 1; i < arr.length; i++){ 
        if (arr[i] >= highPoint){
            highPoint = arr[i];
        }else{
            downwardChange = true; // i is sitting on the first lower value
            while (downwardChange && arr[i+1]  <= highPoint){
                
            }
        }
    }
}
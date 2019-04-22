function rSigma(num){
    if (num == 1){
        return num;
    }
    return num + rSigma(num-1);
}

function rFibonacci(num){
    if (num == 1 || num == 0){
        return num;
    }
    return rFibonacci(num-1) + rFibonacci(num-2);
}
console.log(rFibonacci(6));
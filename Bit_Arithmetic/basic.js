function dec2hexStr(dec) { 
    var val=dec 
    var result = '' 
    if (dec < 0) { 
        result = '-0x'; 
        val=-dec; 
    } else { 
        result = '0x'; 
    } 
    var arr0x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']; 
    var rem = []; 
    while (val) { 
        rem.push(arr0x[val % 16]); 
        val = val / 16 ^ 0; 
    } 
    for (var i = rem.length - 1; i >= 0; i--) {
        result += rem[i]; 
    }
    console.log('dec2hexStr() data:', dec, 'result', result) 
    return result 
} 
console.log(dec2hexStr(107))
//108 => "0x6C"

[0xF0, 0xC3, 0x96, 0x59] // => 4039349849 (0xF0C39659)

function encodeBytesTo32(value){
    var hex = "";
    
}


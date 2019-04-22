function Node(val=null){
    this.value = val;
    this.chars = [];
    //a 97
    //z 122
}

function Trie(){
    this.root = new Node("");

    this.insert = function(str){
        var current = this.root;
        for (var i = 0; i < str.length; i++){
            var charIdx = str.charCodeAt(i)-97;
            // no node at the chars array index and not end of word
            if (!current.chars[charIdx] && i < str.length-1){
                current.chars[charIdx] = new Node();
                current = current.chars[charIdx];
            }
            // node at the chars array index and not end of word
            else if (current.chars[charIdx] && i < str.length-1){
                current = current.chars[charIdx];
            }
            // no node at the chars array index and end of word
            else if (!current.chars[charIdx] && i == str.length-1){
                current.chars[charIdx] = new Node(str);
                return true;
            }
            // node at the chars array index and end of word
            else if (current.chars[charIdx] && i == str.length-1){
                current.value = str;  // should have already been set in this situation though
                return false;
            }
        }
    }

    this.contains = function(str){
        var current = this.root;
        for (var i = 0; i < str.length; i++){
            var charIdx = str.charCodeAt(i)-97;
            if (current.chars[charIdx]){
                current = current.chars[charIdx];
            }else{
                return false;
            }  
        }
        if (current.value == str){
            return true;
        }
        return false;
    }
}


var t = new Trie();
console.log(t.insert("fuzzy")); // true
console.log(t.root); // ''
console.log(t.root.chars[5]); // f node
console.log(t.root.chars[5].chars[20]); // u node
console.log(t.root.chars[5].chars[20].chars[25]); // z node 
console.log(t.root.chars[5].chars[20].chars[25].chars[25]); // z node
console.log(t.root.chars[5].chars[20].chars[25].chars[25].chars[24]); // y node
console.log(t.insert("furry")); // true
console.log(t.root); // ''
console.log(t.root.chars[5]); // f node
console.log(t.root.chars[5].chars[20]); // u node
console.log(t.root.chars[5].chars[20].chars[17]); // r node 
console.log(t.root.chars[5].chars[20].chars[17].chars[17]); // r node
console.log(t.root.chars[5].chars[20].chars[17].chars[17].chars[24]); // y node
//console.log(t.insert("fuzzy")); // false
//console.log(t.insert("furry")); // false
console.log(t.contains("fuzzy")); // true
console.log(t.contains("furry")); // true
console.log(t.contains("fuzz")); // false
console.log(t.contains("fur")); // false
console.log(t.contains("fuzzyface")); // false

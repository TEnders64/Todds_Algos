function BST(){
    this.root = null;

    this.isEmpty = function(){
        if (this.root == null){
            return true;
        }
        return false;
    }

    this.add = function(val){
        var node = new BSTNode(val);
        if (this.isEmpty()){
            return this.root = node;
        }
        var current = this.root;
        while (current){
            if (val < current.value){
                if (current.left){
                    current = current.left;
                }else{
                    return current.left = node;
                }
            }else{
                // val >= current.value
                if (current.right){
                    current = current.right;
                }else{
                    return current.right = node;
                }
            }
        }
    }

    this.min = function(){
        if (this.isEmpty()){
            return undefined;
        }
        var current = this.root;
        while (current.left){ 
            current = current.left; 
        }
        return current.value;
    }

    this.max = function(){
        if (this.isEmpty()){
            return undefined;
        }
        var current = this.root;
        while (current.right){ 
            current = current.right; 
        }
        return current.value;
    }

    this.contains = function(val){
        if (this.isEmpty()){
            return false;
        }
        var current = this.root;
        while (current){
            if (current.value == val){
                return true;
            }
            if (current.value > val){
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return false;
    }

    this.size = function(node=this.root){
        if (!node){
            return 0;
        }
        return 1 + this.size(node.left) + this.size(node.right);
    }
}

function BSTNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

var bst = new BST();
bst.add(2);
// console.log(bst);
bst.add(1);
// console.log(bst);
bst.add(3);
bst.add(2.5);
bst.add(2.1);
bst.add(4);
bst.add(0);
// console.log(bst.min());
// console.log(bst.max());
// console.log(bst.contains(0)); //false
// console.log(bst.contains(2)); //true
// console.log(bst.contains(2.5)); //true
// console.log(bst.contains(4)); //false
console.log(bst.size()); // 4

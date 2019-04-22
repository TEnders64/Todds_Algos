function BST(){
    this.root = null;
}

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.add = function(val){
    var bstNode = new Node(val);
    if (!this.root){
        this.root = bstNode;
        return this;
    }
    var current = this.root;
    while (current){
        if (current.value > val){
            if (!current.left){
                current.left = bstNode;
                return this;
            }
            current = current.left;
        } else {
            if (!current.right){
                current.right = bstNode;
                return this;
            }
            current = current.right;
        }
    }
}

BST.prototype.isEmpty = function(){
    return (!this.root);
}

BST.prototype.min = function(){
    if (this.isEmpty()){return undefined;}
    var current = this.root;
    while (current.left){
        current = current.left;
    }
    return current.value;
}

BST.prototype.max = function(){
    if (this.isEmpty()){return undefined;}
    var current = this.root;
    while (current.right){
        current = current.right;
    }
    return current.value;
}

BST.prototype.contains = function(val){
    if (this.isEmpty()){return false;}
    var current = this.root;
    while (current){
        if (current.value == val){
            return true;
        }else if(current.value > val){
            current = current.left;
        }else{
            current = current.right;
        }
    }
    return false;
}

BST.prototype.size = function(node=this.root){
    if (!node){ return 0; }
    return 1 + this.size(node.right) + this.size(node.left);
}

BST.prototype.height = function(node=this.root){
    if (!node){ return 0; }
    var left = this.height(node.left);
    var right = this.height(node.right);
    if (left >= right) { return 1+left; }
    return 1+right;
}

BST.prototype.isBalanced = function(node=this.root){
    if (!node){ return true; }
    var left = this.height(node.left);
    var right = this.height(node.right);
    if (Math.abs(left-right) > 1){ return false; }
    return (this.isBalanced(node.left) && this.isBalanced(node.right));
}

var b = new BST();
console.log(b.isEmpty());
b.add(5).add(3).add(6).add(2).add(4).add(5.5).add(7).add(1).add(3.5).add(0);
console.log(b);
console.log(b.isEmpty());
console.log(b.min());
console.log(b.max());
console.log(b.contains(8));
console.log(b.contains(10));
console.log(b.contains(6));
console.log(b.size()); // 6
console.log(b.height()); // 5
console.log(b.isBalanced()); // false
function Node(val){
    this.value = val;
    this.next = null;
}

function SLL(){
    this.head = null;

    this.display = function(){
        var current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
    }

    this.addFront = function(val){
        var newNode = new Node(val); // build a new node regardless
        // see if the list is empty
        if (this.head == null){
            // if it's empty, put the new node at the head
            this.head = newNode;
        } else {
            // if it's not empty, put the new node at the head but don't lose the old order of nodes
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    this.addBack = function(val){
        var newNode = new Node(val);
        // see if the list is empty
        if (!this.head){ // if the head isn't set
            this.head = newNode;
        }else{
            // we need to get to the end of the list and set that node's next to the newNode
            var current = this.head;
            while (current.next){ // is there something after the node?
                current = current.next; // if so, move to it.
            }
            // connect the new node
            current.next = newNode;
        }
    }

    this.length = function(){
        var current = this.head;
        var counter = 0;
        while (current){
            counter++;
            current = current.next;
        }
        return counter;
    }

    this.removeFront = function(){
        // if the list is empty, then this.head is null
        if (this.head){
            this.head = this.head.next;
        }
    }
}

var sll1 = new SLL();
sll1.addBack(100);
sll1.addFront(50);
sll1.addBack(200);
sll1.display();
console.log(sll1.length());
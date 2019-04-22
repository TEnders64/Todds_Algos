function SLL(){ //class definition of SLL
    this.head = null; //head property set to null initially
    //AddFront function that adds a value, therefore node to the front of the SLL
    this.AddFront = function(val){

        //create the node
        var node = new Node(val);
        // if the head of the SLL is empty, then we can simply set the head to the new node
        if (this.head == null){
            this.head = node;
        }
        // if the head is occupied, then create a temp to also point to the head so we can manipulate
        // the head to point elsewhere and not lose our previous head node
        // set the head to the new node, then set the new node's .next to the temp (previous head)
        else{
            var temp = this.head;
            this.head = node;
            node.next = temp;
        }
    }

    // Contains -- Search the SLL for a value, if found return true, if not return false
    this.Contains = function(val){ // incoming val to search for
        var current = this.head; // set a current variable to the head of the list
        while(current){ // while there's a node, let's keep moving...
            if (current.value == val){ //...unless we find what we're looking for in the node we're currently on
                return true; // return true
            }
            current = current.next;
        } // if we finish the while loop without finding our value, return false because it isn't there
        return false;
    }

    // RemoveFront -- Remove the front node of the list and return its value. Return null if the list is empty
    this.RemoveFront = function(){
        // determine if the list is empty or not
        if (this.head) { // if not empty
            var temp = this.head; // set a temp to the head node so we don't lose it after the next step
            this.head = this.head.next; // set the head to the head node's .next
            return temp.value; // return the temp's VALUE, not the entire node itself
        }
        return null; // if the list is empty, return null instead.
    }


}

function Node(val){ // class definition for Node
    this.value = val; // value is a property and val is the incoming value we want to set this.value to
    this.next = null; // next pointer is null as we don't assume the node have a buddy yet
}

var mySLL = new SLL();
mySLL.AddFront("Dojo");
mySLL.AddFront("Amazon");

console.log(mySLL.head.next);
 


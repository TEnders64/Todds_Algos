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

    this.Front = function(){
        if (this.head){
            return this.head.value;
        }
        return null;
    }

    this.Length = function(){
        var count = 0;
        var current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    this.Min = function(){
        var min = null;
        if (this.head){
            min = this.head.value;
            var current = this.head.next;
            while(current){
                if (current.value < min){
                    min = current.value;
                }
                current = current.next;
            }
        }
        return min;
    }

    this.Max = function(){
        var max = null;
        if (this.head){
            max = this.head.value;
            var current = this.head.next;
            while(current){
                if (current.value > max){
                    max = current.value;
                }
                current = current.next;
            }
        }
        return max;
    }

    this.Average = function(){
        var sum = 0;
        var count = 0;
        var current = this.head;
        while (current){
            count++;
            sum += current.value;
            current = current.next;
        }
        return sum/count;
    }

    this.Display = function(){
        var str_list = "";
        var current = this.head;
        while (current){
            str_list += current.value + " => ";
            current = current.next;
        }
        console.log(str_list + "null");
    }

    this.Prepend = function(val, before){
        var node = new Node(val);
        if (!this.head){
            this.head = node;
            return this;
        }
        if (this.head.value == before){
            this.AddFront(val);
            return this;
        }
        var current = this.head;
        while (current.next){
            if (current.next.value == before){
                var temp = current.next;
                current.next = node;
                node.next = temp;
                return this;
            }
        }
        current.next = node;
        return this; 
    }
}

function Node(val){ // class definition for Node
    this.value = val; // value is a property and val is the incoming value we want to set this.value to
    this.next = null; // next pointer is null as we don't assume the node have a buddy yet
}

var mySLL = new SLL();
mySLL.AddFront(5);
mySLL.AddFront(4);
mySLL.AddFront(3);
mySLL.AddFront(2);
mySLL.AddFront(1);
mySLL.AddFront(-1);

mySLL.Display();
// console.log(mySLL.Front()); // -1
// console.log(mySLL.Length()); // 6
// console.log(mySLL.Min()); // -1
// console.log(mySLL.Max()); // 5
// console.log(mySLL.Average()); // 2.333333
mySLL.Prepend(999, -1);
mySLL.Display();
 


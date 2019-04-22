function SLQueue(){
    this.head = null;
    this.tail = null;

    this.enQ = function(val){
        var node = new Node(val);
        if (!this.head){
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    this.deQ = function(){
        if (this.head){
            var node = this.head;
            this.head = this.head.next;
            if (!this.head){
                this.tail = null;
            }
            return node.value;
        }
        return null;
    }

    this.front = function(){
        if (this.head){
            return this.head.value;
        }
        return null;
    }

    this.contains = function(val){
        if (this.head){
            if (this.head.value == val || this.tail.value == val){
                return true;
            }
            var current = this.head.next;
            while (current){
                if (current.value == val){
                    return true;
                }
                current = current.next;
            }
            return false;
        }
    }

    this.isEmpty = function(){
        return !this.head;
    }

    this.size = function(){
        if (!this.isEmpty()){
            var size = 0;
            var current = this.head;
            while (current){
                size++;
                current = current.next;
            }
            return size;
        }
        return 0;
    }
}

function Node(val){
    this.value = val;
    this.next = null;
}

var mySLQ = new SLQueue();
var mySLQ2 = new SLQueue();

mySLQ.enQ(5).enQ(10).enQ(15).enQ(20);
mySLQ2.enQ(5).enQ(11).enQ(15).enQ(20);

function compareQs(q1, q2){
    if (q1.size() != q2.size()){
        return false;
    }
    var current1 = q1.head;
    var current2 = q2.head;
    while (current1 && current2){
        if (current1.value != current2.value){
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return true;
}
console.log(compareQs(mySLQ, mySLQ2));

function removeMin(q){
    if (q.head){
        var min = q.head.value;
        var current = q.head;
        while (current){
            if (current.value < min){
                min = current.value;
            }
        }
    }
}
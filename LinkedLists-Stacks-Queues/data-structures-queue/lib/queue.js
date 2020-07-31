class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.length = 0;
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        let node = new Node(value)

        if(this.length === 0){
            this.back = node;
            this.front = node;
            this.length += 1;
        } else if(this.length === 1){
            this.front.next = node;
            this.back = node;
            this.length += 1;
        } else {
            this.back.next = node
            this.back = node
            this.length += 1;
        }
        return this.length;
    }

    dequeue(){
        if(this.length === 0) return null;
        if(this.length === 1) {
            let temp = this.front
            this.front = null;
            this.back = null;
            this.length -= 1
            return temp.value;
        } else {
            let temp = this.front;
            this.front = this.front.next;
            this.length -= 1;
            return temp.value;
        }
    }

    size() {
        return this.length
    }

}

exports.Node = Node;
exports.Queue = Queue;

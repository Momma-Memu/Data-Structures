class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let node = new Node(val)
        if(this.head === null){
            this.head = node,
            this.tail = node,
            this.length += 1;
            return this
        } else {
            this.tail.next = node;
            this.tail = node;
            this.length += 1;
            return this
        }
    };

    // TODO: Implement the removeTail method here
    removeTail() {
        if(this.tail === null) return undefined;
        if(this.length === 1){
            let temp = this.head;
            this.length -= 1;
            this.head = null;
            this.tail = null;
            return temp;
        }
        this.length -= 1;
        let current = this.head
        while(current.next){
            if(current.next === this.tail){
                let temp = this.tail
                current.next = null;
                this.tail = current;
                return temp
            }
            current = current.next;
        }

    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let node = new Node(val);
        if(this.head === null){
            this.head = node,
            this.tail = node,
            this.length += 1;
            return this
        } else {
            node.next = this.head;
            this.head = node
            this.length +=1
            return this
        }
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(this.head === null) return undefined;
        if(this.length === 1) {
            let temp = this.head
            this.head = null;
            this.tail = null
            this.length -= 1;
            return temp
        }
        let temp = this.head
        this.head = this.head.next
        this.length -= 1
        return temp
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head

        if(this.tail.value === target) {
            return true
        }

        while(current.next){
            if(current.value === target){
                return true
            }
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if(this.length - 1 < index) return null;
        let current = this.head
        while(index > 0) {
            current = current.next
            index--
        }
        return current
    }

    // TODO: Implement the set method here
    set(index, val) {
        if(this.length - 1 < index) return false;
        let current = this.head
        while(index > 0) {
            current = current.next
            index--
        }
        current.value = val
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        let node = new Node(val);
        if(this.length - 1 < index) return false;
        let current = this.head
        while(index - 1 > 0) {
            current = current.next
            index--
        }
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length += 1
        return true

    }

    // TODO: Implement the remove method here
    remove(index) {
        if(this.length - 1 < index) return undefined;
        let current = this.head;
        while(index - 1> 0) {
            current = current.next
            index--
        }
        let temp = current.next
        current.next = current.next.next
        this.length -= 1;
        return temp
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}


exports.Node = Node;
exports.LinkedList = LinkedList;

/* ###########################
DOUBLY LINKED LISTS 
- JavaScript does not have linked list, need to build it out.
############################## */

// ORDER: [ 1 --> 10 --> 16 --> 88 ]

// Class used for our new nodes, to satisfy our DRY (Don't Repeat Yourself)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.perev = null;  // For doubly linked list, we add in our previous
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    // APEND METHOD
    append(value) {

        const newNode = new Node(value);

        console.log(newNode)
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {

        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList();
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
  // myLinkedList.insert(20, 88)
  // myLinkedList.printList()
  // myLinkedList.remove(2)
  // myLinkedList.reverse()




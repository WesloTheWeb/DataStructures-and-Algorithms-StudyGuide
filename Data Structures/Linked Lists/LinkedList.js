/* 
###########################
LINKED LISTS 
- JavaScript does not have linked list, need to build it out.
10 --> 5 --> 16

##############################
*/

// let myLinkedList = {
//     head: {
//         value: 10 
//         next: {    
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head; // only because we have one item the head is the tail.
//         this.length = 1 // optional but we can keep track of the length of the linked list.
//     }
//     append(value) {
//         // Adds to the end of the list
//         const newNode = {
//             value: value,
//             next: null
//         };
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this; // just for fun to return the linkedlist
//     }
//     prepend(value) {
//         // ADds to the beginning of the list
//         const newNode = {
//             value: value,
//             next: null
//         };
//         newNode.next = this.head;
//         this.head = newNode // update the reference!!!
//         this.length++;
//         return this;
//     }
// }

/*####################################################################
OPTIMIZED WAY OF USING A HELPER CLASS FOR DRY (DO NOT REPEAT YOURSELF) 
######################################################################*/
// This class creates a new node for us.
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1
//     }
//     append(value) {
//         const newNode = new Node(value)
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = new Node(value)
//         newNode.next = this.head;
//         this.head = newNode
//         this.length++;
//         return this;
//     }
// }


// const myLinkedList = new LinkedList(10)
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.append(27);
// myLinkedList.prepend(1);
// myLinkedList.prepend(43b);

// console.log(myLinkedList);

/*#######################################################
Linked List with the Insert Method
#######################################################*/

// This class creates a new node for us.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1)  // point to the leader and go back one when traversing.
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    } 

    traverseToIndex(index) {
        // check params
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
}


const myLinkedList = new LinkedList(10)
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(27);
myLinkedList.insert(2, 'uwu Im new!');
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.prepend(43);

console.log(myLinkedList);
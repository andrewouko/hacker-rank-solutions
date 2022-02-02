/**
         * 
         * Linked Lists */
 const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};




// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let head3 = new SinglyLinkedListNode(0)

    while (head1 || head2) {
        if (head1.data < head2.data) {
            head3.next = head1
        }
        else {
            head3.next = head2
        }
    }
    return head3
}
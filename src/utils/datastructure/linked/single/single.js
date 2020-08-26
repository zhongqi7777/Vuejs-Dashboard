function Node(data) {
  this.data = data;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null; //  Node at start of list
    this.tail = null; //  Node at end of list\
    this.length = 0;
  }

  addNode(data) {
    const node = new Node(data);

    if (!this.head) {
      //  Make this node both the tail & head
      //  since there are no other nodes.
      this.head = node;
      this.tail = node;
    } else {
      //  Make this the next node for the current tail
      this.tail.next = node;
      //  Then set the tail to this node
      this.tail = node;
    }
    this.length++;
    return this;
  }

  removeNode(data) {
    let previous = this.head;
    let current = this.head;

    if (!current) {
      return this;
    }

    while (current) {
      if (current.data === data) {
        if (current === this.head) this.head = this.head.next;
        // Replace head node with the node after it
        else if (current === this.tail) this.tail = previous; // Replace tail with node before it

        previous.next = current.next; // Replace current node with the node after it

        break;
      }

      previous = current;
      current = current.next;
    }

    this.length--;
    return this;
  }
}

export default LinkedList;

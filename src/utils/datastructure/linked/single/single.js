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
  /**
   * 根据索引获取 item
   * @param   {Number}    index   链表索引
   * @returns {*}
   */
  get(index) {
    if (typeof index !== "number" || index < 0 || index >= this.length) {
      return undefined;
    }

    var item = this.head;
    for (var i = 0; i < index; i++) {
      item = item.next;
    }
    return item;
  }

  add(data) {
    const node = new Node(
      Object.prototype.toString.call(data) === "[object String]"
        ? data
        : JSON.stringify(data)
    );

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

  removeByIndex(index) {
    if (typeof index !== "number" || index < 0 || index >= this.length) {
      return false;
    }

    var item = this.get(index);

    if (this.length > 1) {
      if (index === 0) {
        this.head = item.next;
      } else if (index === this.length - 1) {
        this.tail = this.get(this.length - 2);
        this.tail.next = null;
      } else {
        this.get(index - 1).next = item.next;
      }
    } else {
      this.head = null;
      this.tail = null;
    }

    item = null;
    this.length--;
    return true;
  }

  /**
   * delete element by item
   * @param   {Object}
   * @returns {Object}
   */
  removeByItem(data) {
    let removeItem =
      Object.prototype.toString.call(data) === "[object String]"
        ? data
        : JSON.stringify(data);
    let previous = this.head;
    let current = this.head;

    if (!current) {
      return this;
    }

    while (current) {
      if (current.data === removeItem) {
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

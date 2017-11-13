class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(value) {
    this.length++;
    const newNode = {
      value,
      next: null
    }

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

    dequeue() {
      this.length--;
      if (!this.head) return null;
      if (!this.head.next) this.tail = null;

      const returnValue = this.head.value;
      this.head = this.head.next;
      return returnValue;
    }

    get size() {
      return this.length;
    }


}

const myList = new LinkedList;
myList.enqueue('Milo');
myList.enqueue('Plato');
myList.enqueue('Cujo');


console.log(myList);
console.log(myList.dequeue());
console.log(myList);
console.log(myList.size);

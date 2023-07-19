class Queue<T> {
  // T represents a generic type
  // T[] is an array of generic type
  items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  // unfinished
}

const queue = new Queue<number>();
const queue2 = new Queue<number>();

queue.enqueue(3);

console.log(queue);

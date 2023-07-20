// Queue Data Structure

// Solution:

class Queue<T> {
  // T represents a generic type
  // T[] is an array of generic type
  items: T[];

  // the constructor creates objects with a key 'items' and value '[]', which will be the array
  // where we will create our queue
  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): T | undefined {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }
}

export {};

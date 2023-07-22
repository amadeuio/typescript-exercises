// Stack Data Structure

// Solution:

class Stack<T> {
  // T[] is an array of generic type
  private items: T[];

  // the constructor creates objects with a key 'items' and value '[]', which will be the array
  // where we will create our stack
  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): T | undefined {
    return this.items.slice(-1)[0];
  }

  size(): number {
    return this.items.length;
  }
}

export {};

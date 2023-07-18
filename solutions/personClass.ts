// Person Class

// Solution:

class Person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // void: the function doesn't return any value;
  introduce(): void {
    console.log(
      `Hi, my name is ${this.name}. I'm ${this.age} years old, and my email address is ${this.email}.`
    );
  }
}

const person = new Person("John Doe", 64, "johndoe@example.com");
person.introduce();

export {};

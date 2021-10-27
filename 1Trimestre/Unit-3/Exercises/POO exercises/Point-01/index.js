class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
      this.stomach = [];
   }

   eat(food) {
      if (this.stomach.length >= 10) {
         this.stomach.push(food);
      }
   }

   poop() {
      this.stomach = [];
   }

   toString() {
      return `${this.name}, ${this.age}`;
   }
}

let person = new Person('Pedro', 20);
console.log(person);
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Pizza');
person.eat('Arandanos');
console.log(person);
person.poop();
console.log(person);
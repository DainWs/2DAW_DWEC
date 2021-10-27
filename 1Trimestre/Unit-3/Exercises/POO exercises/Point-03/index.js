class Lambdasian {
   constructor(builder) {
      this.name = builder.name;
      this.age = builder.age;
      this.location = builder.location;
   }

   speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
   }
}

let builder = {};
builder.name = "Pedro";
builder.age = 18;
builder.location = "Spain";

let lambdasian = new Lambdasian(builder);
console.log(lambdasian);
lambdasian.speak();
console.log(lambdasian);
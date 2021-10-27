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

class Instructor extends Lambdasian {
   constructor(builder) {
      super(builder);
      this.specialty = builder.specialty;
      this.favLanguage = builder.favLanguage;
      this.catchPhrase = builder.catchPhrase;
   }

   demo(subject) {
      return `Today we are learning about ${subject}`;
   }

   grade(student, subject) {
      return `${student} receives a perfect score on ${subject}`;
   }

}

let builder = {};
builder.name = "Pedro";
builder.age = 35;
builder.location = "Spain";
builder.specialty = "redux";
builder.favLanguage = "Java";
builder.catchPhrase = "Don't forget the homies";

let instructor = new Instructor(builder);
console.log(instructor);
instructor.speak();
console.log(instructor);
console.log(instructor.demo("Java POO"));
console.log(instructor.grade("Javi", "Java POO"));
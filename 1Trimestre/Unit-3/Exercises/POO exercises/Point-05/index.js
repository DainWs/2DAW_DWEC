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

class Student extends Lambdasian {
   constructor(builder) {
      super(builder);
      this.previousBackground  = builder.previousBackground;
      this.className = builder.className;
      this.favSubjects = builder.favSubjects;
   }

   listSubjects() {
      return this.favSubjects;
   }

   PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
   }

   sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
   }
}
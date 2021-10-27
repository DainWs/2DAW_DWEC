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
      student.setGrade((Math.random() * 99) + 1);
      return `${student} receives a perfect score on ${subject}`;
   }

}

class Student extends Lambdasian {
   constructor(builder) {
      super(builder);
      this.previousBackground  = builder.previousBackground;
      this.className = builder.className;
      this.favSubjects = builder.favSubjects;
      setGrade(builder.grade);
   }

   setGrade(num) {
      if(0 < num && num < 100) {
         this.grade = num;
      }
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

   graduate(teacher) {
      while (this.grade < 70) {
         teacher.grade(this, this.className);
      }
      return `${this.name} has been graduated!`;
   }
}

class ProjectManager extends Instructor{
   constructor(builder) {
      super(builder);
      this.gradClassName = builder.gradClassName;
      this.favInstructor = builder.favInstructor;
   }

   standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`;
   }
   
   debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
   }
}
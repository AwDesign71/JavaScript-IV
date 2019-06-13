// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
        return(`Hello, my name is ${this.name} and I'm from ${this.location}`);
    }
}

class Instructor extends Person {
  constructor() {
    super(instructorArrts);
        this.specialty = instructorArrts.specialty;
        this.favLanguage = instructorArrts.favLanguage;
        this.catchPhrase = instructorArrts.catchPhrase;
  }
  demo(subject) {
    return(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
      return(`${student.name} receives a perfect score on ${subject}`);
  }
}
class Student extends Person {
    constructor(studentArrts) {
        super(studentArrts);
      this.previousBackground = studentArrts.previousBackground;
      this.className = studentArrts.className;
      this.favSubjects = studentArrts.favLanguage;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
}
class ProjectManagers extends Instructor {
    constructor(instructorArrts) {
        super(instructorArrts);
        this.gradClassName = instructorArrts.gradClassName;
        this.favInstructor = instructorArrts.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @channel standy times`;
    }
    debugsCode(student, object) {
        return `${this.name} debugs ${this.student.name}'s code on ${this.subject}`;
    }
}
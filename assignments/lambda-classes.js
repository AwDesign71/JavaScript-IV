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
    super(instructorarrts);
        this.specialty = instructorarrts.specialty;
        this.favLanguage = instructorarrts.favLanguage;
        this.catchPhrase = instructorarrts.catchPhrase;
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
      this.previousBackground = studentArrts.previousBackground;
      this.className = studentArrts.className;
      this.favSubjects = studentArrts.favLanguage;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
}
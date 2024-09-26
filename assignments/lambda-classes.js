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
  constructor(instructorArrts) {
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
      this.favSubjects = studentArrts.favSubjects;
    }
    listsSubjects() {
        for(let i=0; i < this.favSubjects.length; i++) {
            console.log(`${this.favSubjects[i]}`);
        }
        
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
class ProjectManagers extends Instructor {
    constructor(pmArrts) {
        super(pmArrts);
        this.gradClassName = pmArrts.gradClassName;
        this.favInstructor = pmArrts.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times`;
    }
    debugsCode(student, object) {
        return `${this.studnet} debugs ${this.student}'s code on ${this.subject}`;
    }
}
//Objects for Instructors
const chuck = new Instructor({
    name: 'Chuck',
    age: '45',
    location: 'Atlanta',
    specialty: 'Java',
    favLanguage: 'PHP',
    catchPhrase: 'It\'s not impossible to achive your goals.'
});
const lisa = new Instructor({
    name: 'Lisa',
    age: '47',
    location: 'Newark',
    specialty: 'CSS',
    favLanguage: 'JavaScript',
    catchPhrase: 'Hard is the key to success.'
});
const gabe = new Instructor({
    name: 'Gabe',
    age: '38',
    location: 'Miami',
    specialty: 'Ruby',
    favLanguage: 'SQL',
    catchPhrase: 'There is no such things a perfect programmer.'
});
//Obects for Students
const rebbecca = new Student({
    name: 'Rebbecca',
    age: '28',
    location: 'Richmond',
    previousBackground: 'Nursing',
    className: 'Web21',
    favSubjects: ['HTML', 'CSS', 'Jquery']
})
const sherry = new Student({
    name: 'Sherry',
    age: '33',
    location: 'Oakland',
    previousBackground: 'Home-care',
    className: 'Web21',
    favSubjects: ['Bootstrap', 'Node.js', 'React']
})
const ricky = new Student({
    name: 'Ricky',
    age: '22',
    location: 'Houston',
    previousBackground: 'Fast Food',
    className: 'Web21',
    favSubjects: ['React', 'java', 'Html']
})
//PM objects
const terry = new ProjectManagers({
 name: 'Terry',
 age: '44',
 location: 'Charlotte',
 gradClassName: 'Web21',
 favInstructor: 'Chuck',
});
const timmy = new ProjectManagers({
    name: 'Timmy',
    age: '34',
    location: 'Charleston',
    gradClassName: 'Web21',
    favInstructor: 'Lisa'
   });
   const sandy = new ProjectManagers({
    name: 'Sandy',
    age: '44',
    location: 'Brooklyn',
    gradClassName: 'Web21',
    favInstructor: 'Gabe'
   });
   //Console log the outputs
   rebbecca.listsSubjects();
   console.log(gabe.speak('Miami'));
   console.log(sandy.standUp('Web21'));
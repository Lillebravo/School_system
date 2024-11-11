import { Person } from "./Person.js";
import { Grade } from "./Grade.js";

export class Student extends Person {
  #age;
  #gender;

  constructor(name, age, gender) {
    super(name);
    this.#age = age;
    this.#gender = gender;
  }

  get age() {
    return this.#age;
  }

  get gender() {
    return this.#gender;
  }

  getGrades() {
    const allGrades = {};
    this.subjects.forEach((subject) => {
      const gradeInfo = subject.getStudentGrade(this.name);
      if (gradeInfo) {
        allGrades[subject.name] = {
          ...gradeInfo,
          points: subject.points,
        };
      }
    });
    return allGrades;
  }
}

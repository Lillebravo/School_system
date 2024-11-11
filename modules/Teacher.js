import { Person } from "./Person.js";
import { Grade } from "./Grade.js";

export class Teacher extends Person {
  gradeStudent(student, subject, grade) {
    if (!this.subjects.includes(subject)) {
      return `${this.name} is not authorized to grade ${subject.name}`;
    }
    if (!student.subjects.includes(subject)) {
      return `${student.name} is not enrolled in ${subject.name}`;
    }
    if (!Grade.isValid(grade)) {
      return `Invalid grade: ${grade}`;
    }

    return subject.setGrade(student.name, grade, this.name);
  }
}

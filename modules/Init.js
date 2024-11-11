import { School } from "./School.js";
import { Student } from "./Student.js";
import { Teacher } from "./Teacher.js";
import { Subject } from "./Subject.js";

export function initializeSchool() {
  const school = new School("Bergaskolan", "Bergagatan 33", 24424, "Lund");

  // Create subjects
  const math = new Subject("Mattematik_1c");
  const english = new Subject("Engelska_5");
  const swedish = new Subject("Svenska_1");

  // Create teachers
  const nicklas = new Teacher("Nicklas");
  const daniel = new Teacher("Daniel");
  school.addTeacher(nicklas);
  school.addTeacher(daniel);

  // Create students
  const students = [
    new Student("Johan", 23, "Man"),
    new Student("Ruben", 26, "Man"),
    new Student("Måns", 24, "Man"),
    new Student("Sebbe", 19, "Man"),
    new Student("Piano", 25, "Kvinna"),
  ];

  students.forEach((student) => {
    school.addStudent(student);
    if (student.age % 2 === 0) {
      english.addStudent(student);
      swedish.addStudent(student);
    } else {
      math.addStudent(student);
    }
  });

  // Assign teachers to subjects
  english.addTeacher(nicklas);
  swedish.addTeacher(nicklas);
  math.addTeacher(daniel);

  return { school, subjects: { math, english, swedish } };
}

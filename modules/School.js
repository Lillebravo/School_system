export class School {
  #name;
  #address;
  #zipCode;
  #city;
  #students;
  #teachers;

  constructor(name, address, zipCode, city) {
    this.#name = name;
    this.#address = address;
    this.#zipCode = zipCode;
    this.#city = city;
    this.#students = new Map();
    this.#teachers = new Map();
  }

  get name() {
    return this.#name;
  }

  get students() {
    return Array.from(this.#students.values());
  }

  get teachers() {
    return Array.from(this.#teachers.values());
  }

  addStudent(student) {
    this.#students.set(student.name, student);
  }

  addTeacher(teacher) {
    this.#teachers.set(teacher.name, teacher);
  }

  relegateStudent(studentName) {
    const student = this.#students.get(studentName);
    if (!student) return null;

    student.subjects.forEach((subject) => {
      subject.removeStudent(student);
    });

    this.#students.delete(studentName);
    return `${studentName} was relegated.`;
  }

  fireTeacher(teacherName) {
    const teacher = this.#teachers.get(teacherName);
    if (!teacher) return null;

    teacher.subjects.forEach((subject) => {
      subject.removeTeacher(teacher);
    });

    this.#teachers.delete(teacherName);
    return `${teacherName} was fired.`;
  }
}

export class Subject {
  #name;
  #students;
  #teachers;
  #grades;
  #points;

  constructor(name, points = 100) {
    this.#name = name;
    this.#students = new Set();
    this.#teachers = new Set();
    this.#grades = new Map();
    this.#points = points;
  }

  get name() {
    return this.#name;
  }

  get points() {
    return this.#points;
  }

  get students() {
    return Array.from(this.#students);
  }

  get teachers() {
    return Array.from(this.#teachers);
  }

  addStudent(student) {
    this.#students.add(student);
    student.addSubject(this);
  }

  removeStudent(student) {
    this.#students.delete(student);
    student.removeSubject(this);
  }

  addTeacher(teacher) {
    this.#teachers.add(teacher);
    teacher.addSubject(this);
  }

  removeTeacher(teacher) {
    this.#teachers.delete(teacher);
    teacher.removeSubject(this);
  }

  setGrade(studentName, grade, teacherId) {
    const existingGrade = this.#grades.get(studentName);
    const gradeData = {
      grade,
      date: new Date().toISOString(),
      teacherId,
    };

    if (existingGrade) {
      gradeData.previousGrade = existingGrade.grade;
      this.#grades.set(studentName, gradeData);
      return `Grade was updated from ${existingGrade.grade} to ${grade} for ${studentName} in ${this.name}`;
    }

    this.#grades.set(studentName, gradeData);
    return `Grade ${grade} assigned to ${studentName} in ${this.name}`;
  }

  getStudentGrade(studentName) {
    return this.#grades.get(studentName) || null;
  }
}

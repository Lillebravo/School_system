export class SubjectsManager {
    #subjects;
  
    constructor() {
      this.#subjects = new Map();
    }
  
    createSubject(name, points = 100) {
      const subject = new Subject(name, points);
      this.#subjects.set(name, subject);
      return subject;
    }
  
    getSubject(name) {
      return this.#subjects.get(name);
    }
  
    getAllSubjects() {
      return Array.from(this.#subjects.values());
    }
  }
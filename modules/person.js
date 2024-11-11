export class Person {
  #name;
  #subjects;

  constructor(name) {
    this.#name = name;
    this.#subjects = [];
  }

  get name() {
    return this.#name;
  }

  get subjects() {
    return [...this.#subjects];
  }

  addSubject(subject) {
    if (!this.#subjects.includes(subject)) {
      this.#subjects.push(subject);
    }
  }

  removeSubject(subject) {
    const index = this.#subjects.indexOf(subject);
    if (index !== -1) {
      this.#subjects.splice(index, 1);
    }
  }
}

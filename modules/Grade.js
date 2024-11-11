export class Grade {
  static values = {
    A: 20,
    B: 17.5,
    C: 15,
    D: 12.5,
    E: 10,
    F: 0,
  };

  static isValid(grade) {
    return grade in this.values;
  }
}

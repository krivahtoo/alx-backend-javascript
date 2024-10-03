export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = n;
  }

  get name() {
    return this._name;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = len;
  }

  get length() {
    return this._length;
  }

  set students(s) {
    this._students = s;
  }

  get students() {
    return this._students;
  }
}

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stud1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const stud2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'New York'
};

const studentsList: Student[] = [
  stud1, stud2
];

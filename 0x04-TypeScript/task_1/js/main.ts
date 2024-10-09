interface Teacher {
  readonly firstName: string; // First name is only modifiable when initialized
  readonly lastName: string;  // Last name is only modifiable when initialized
  fullTimeEmployee: boolean;  // This attribute should always be defined
  yearsOfExperience?: number; // This attribute is optional
  location: string;           // This attribute should always be defined
  [key: string]: any;         // Allow any other attributes like `contract`
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number; // Directors must have this attribute
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

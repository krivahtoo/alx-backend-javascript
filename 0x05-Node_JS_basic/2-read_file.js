const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    // Remove the header
    lines.shift();

    // Process each line into fields
    const students = lines.map((line) => {
      // Only extract required fields
      const [firstname,,, field] = line.split(',');
      return { firstname: firstname.trim(), field: field.trim() };
    });

    // Count total students
    console.log(`Number of students: ${students.length}`);

    // Group students by field
    const fields = {};
    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }
      fields[student.field].push(student.firstname);
    });

    // Log each field's information
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split the data into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          reject(new Error('Cannot load the database'));
          return;
        }

        // Remove the header
        lines.shift();

        // Process each line into fields
        const students = lines.map((line) => {
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

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;

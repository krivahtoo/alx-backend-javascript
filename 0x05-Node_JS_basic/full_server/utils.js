import fs from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').slice(1); // Skip header
        const students = {};

        lines.forEach((line) => {
          if (line) {
            const [firstname, , , field] = line.split(',');
            if (!students[field]) students[field] = [];
            students[field].push(firstname);
          }
        });
        resolve(students);
      }
    });
  });
}

const express = require('express');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2]; // Get database path from command line arguments

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students\n';
  try {
    const outputBuffer = [];
    const originalConsoleLog = console.log;

    // Redirect console.log to capture output
    console.log = (message) => outputBuffer.push(message);

    await countStudents(databasePath);

    // Restore console.log and append captured messages
    console.log = originalConsoleLog;
    responseText += outputBuffer.join('\n');
  } catch (error) {
    responseText += 'Cannot load the database';
  } finally {
    res.setHeader('Content-Type', 'text/plain');
    res.send(responseText);
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;

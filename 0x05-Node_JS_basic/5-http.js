const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2]; // Get database path from command line arguments

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const outputBuffer = [];
    const originalConsoleLog = console.log;

    // Redirect console.log to capture the output
    console.log = (message) => {
      outputBuffer.push(message);
    };

    countStudents(databasePath)
      .then(() => {
        res.end(outputBuffer.join('\n'));
        console.log = originalConsoleLog; // Restore original console.log
      })
      .catch((error) => {
        res.end(error.message);
        console.log = originalConsoleLog; // Restore original console.log
      });
  } else {
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;

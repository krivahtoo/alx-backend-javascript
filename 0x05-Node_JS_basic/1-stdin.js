console.log('Welcome to Holberton School, what is your name?');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Remove any extra whitespace
  console.log(`Your name is: ${name}`);

  // End the program gracefully
  console.log('This important software is now closing');
  process.exit(); // Exit the program
});

// Ensure the program gracefully handles end-of-input
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});

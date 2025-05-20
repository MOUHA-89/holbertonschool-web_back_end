process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?:');

process.stdin.on('data', (input) => {
  const text = input.trim();
  console.log(`Your name is : "${text}"`);
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;

function countStudents(pathToFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // skip header

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      let result = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }

      resolve(result.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  const dbFile = process.argv[2];

  if (!dbFile) {
    res.send('Database filename not provided');
    return;
  }

  try {
    const content = await countStudents(dbFile);
    res.send(`This is the list of our students\n${content}`);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(PORT);

module.exports = app;

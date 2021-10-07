const fs = require('fs');

const notetxt = process.argv[2];

fs.writeFile('note.txt', notetxt.toString(), err => {
  if (err) { throw err; }
});

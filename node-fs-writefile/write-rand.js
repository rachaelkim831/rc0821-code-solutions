const fs = require('fs');

const random = Math.random();

fs.writeFile('random.txt', random.toString(), err => {
  if (err) { throw err; }
});

const fs = require('fs');

if (process.argv[2] === 'hopper.txt') {
  fs.readFile('./hopper.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
} else if (process.argv[2] === 'dijkstra.txt') {
  fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
} else if (process.argv[2] === 'cunningham.txt') {
  fs.readFile('./cunningham.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
}

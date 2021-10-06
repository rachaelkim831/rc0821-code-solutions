const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf8', function read(err, data) {
  if (err) {
    throw err;
  }
  console.log(data);
});

const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, 'public');
console.log(join);

const static = express.static(join);
app.use(static);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

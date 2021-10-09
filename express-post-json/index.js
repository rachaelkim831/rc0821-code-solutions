const express = require('express');
const app = express();

let nextId = 1;
let grades = {};

const json = express.json();
app.use(json);

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const property in grades) {
    arr.push(grades[property]);
  }
  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const newGrade = { id: nextId, ...req.body };
  grades = { ...grades, [nextId]: newGrade };
  nextId++;
  console.log(newGrade);
  res.status(201).send(newGrade);
});

app.listen(3000, () => {
  console.log('my app is running on port 3000');
});

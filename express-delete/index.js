const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const property in grades) {
    arr.push(grades[property]);
  }
  res.json(arr);
});

app.delete('/api/grades/:id', (req, res) => {
  for (const property in grades) {
    if (property === req.params.id) {
      delete grades[property];
      return res.sendStatus(204);
    }
  }
  throw new Error('id not found');
});

app.listen(3000, () => {
  console.log('my app is running on port 3000');
});

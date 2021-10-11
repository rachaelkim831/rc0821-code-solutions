const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());

// GET

app.get('/api/notes', (req, res) => {
  const arr = [];
  const notes = data.notes;
  for (const property in notes) {
    arr.push(notes[property]);
  }
  res.send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const notes = data.notes;
  if (isNaN(req.params.id) || req.params.id < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  }
  if (req.params.id !== notes.id) {
    return res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  }
  for (const property in notes) {
    if (property === req.params.id) {
      res.status(200).send(notes[property]);
    }
  }
});

// POST

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).send({ error: 'content is a required field' });
  }
  const newNote = { id: data.nextId, ...req.body };
  data.notes = { ...data.notes, [data.nextId]: newNote };
  data.nextId++;
  if (!data.notes[newNote.id]) {
    return res.status(500).send({ error: 'An unexpected error occurred.' });
  }
  res.status(201).send({ content: 'Inertia is a property of matter.' });
});

// DELETE

app.delete('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id < 0) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  }
  if (req.params.id === undefined) {
    return res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  }
  const notes = data.notes;
  for (const property in notes) {
    if (property === req.params.id) {
      delete notes[property];
      return res.sendStatus(204);
    }
  }
  if (notes[req.params.id]) {
    return res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

// PUT

app.put('/api/notes/:id', (req, res) => {
  if (isNaN(req.params.id) || req.params.id < 0) {
    return res.status(400).send({ error: 'id must be a positive integer' });
  }
  if (!req.body.content) {
    return res.status(400).send({ error: 'content is a required field' });
  }
  if (!data.notes[req.params.id]) {
    return res.status(404).send({ error: `cannot find note with id ${req.params.id}` });
  }
  const notes = data.notes;
  for (const property in notes) {
    if (req.params.id === property) {
      notes[property].content = req.body.content;
      return res.status(200).send({ content: `The event loop, this, closures, and prototypal inheritance are special about JavaScript. ${req.params.id}` });
    }
  }
  if (notes[req.params.id].content !== req.body.content) {
    return res.status(500).send({ error: 'An unexpected error occurred.' });
  }
});

// Listen Port 3000

app.listen(3000, () => {
  console.log('running on port 3000');
});

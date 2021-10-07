
const fs = require('fs');

const file = './data.json';
// command
const userInput1 = process.argv[2];
// note to create or id if update or delete
const userInput2 = process.argv[3];
// updating note
const userInput3 = process.argv[4];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  const parsedData = JSON.parse(data);
  if (userInput1 === 'read') {
    console.log(parsedData);
  } else if (userInput1 === 'create') {
    if (!userInput2) {
      throw new Error('note input required');
    }
    create(parsedData, userInput2);
  } else if (userInput1 === 'delete') {
    if (!userInput2) {
      throw new Error('id input required');
    }
    userInput2.toString();
    deleteNote(parsedData, userInput2);
  } else if (userInput1 === 'update') {
    if (!userInput2) {
      throw new Error('id input required');
    }
    if (!userInput3) {
      throw new Error('note input required');
    }
    update(parsedData, userInput2, userInput3);
  }
  fs.writeFile(file, JSON.stringify(parsedData, null, 2), err => {
    if (err) {
      throw err;
    }
  });
});

const create = (parsedData, newNote) => {
  parsedData.notes[parsedData.nextId] = newNote;
  parsedData.nextId++;
};

const deleteNote = (parsedData, id) => {
  if (id in parsedData.notes) {
    delete parsedData.notes[id];
    console.log('ID deleted');
  } else {
    console.log('ID not found');
  }
};

const update = (parsedData, id, updatingNote) => {
  if (id in parsedData.notes) {
    parsedData.notes[id] = updatingNote;
    console.log('ID updated');
  } else {
    console.log('ID not found');
  }
};

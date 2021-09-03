var booksArray = [
  {
    isbn: '978-1-60309-388-0',
    title: 'The Jekyll Island Chronicles (Book One): A Machine Age War',
    author: 'Steve Nedvidek'
  },
  {
    isbn: '978-1-60309-426-9',
    title: "The Jekyll Island Chronicles (Book Two): A Devil's Reach",
    author: 'Steve Nedvidek'
  },
  {
    isbn: '978-1-60309-493-1',
    title: 'The Jekyll Island Chronicles (Book Three): A Last Call',
    author: 'Steve Nedvidek'
  }
];

console.log('typeof booksArray:', typeof booksArray);
console.log('JSON.stringify:', JSON.stringify(booksArray));
console.log('typeof JSON.stringify:', typeof JSON.stringify(booksArray));

var string = {
  student: {
    'number id': '083191',
    'string name': 'Rachael Kim'
  }
};

var jsonstring = JSON.stringify(string);

console.log('string:', jsonstring, 'typeof string:', typeof JSON.stringify(jsonstring));
console.log('JSON.parse:', JSON.parse(jsonstring), 'typeof JSON.parse:', typeof JSON.parse(jsonstring));

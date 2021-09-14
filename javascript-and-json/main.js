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

var string = '{"number id": "083191", "string name": "Rachael Kim"}';
console.log('string:', string);
console.log('typeof string:', typeof string);

console.log('JSON.parse:', JSON.parse(string), 'typeof JSON.parse:', typeof JSON.parse(string));

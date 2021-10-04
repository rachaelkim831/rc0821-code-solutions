function convertMinutesToSeconds(minutes) {
  var product = minutes * 60;
  return product;
}

var minToSecResult = convertMinutesToSeconds(5);
console.log('minToSecResult:', minToSecResult);

function greet(name) {
  return `Hey, ${name}`;
}

var greetResult = greet('Rachael');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);

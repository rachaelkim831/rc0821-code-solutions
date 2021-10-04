/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var fn = person.firstName;
  var ln = person.lastName;
  return `${fn[0]}${ln[0]}`;
}

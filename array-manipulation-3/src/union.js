/* exported union */
function union(first, second) {
  var newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (!newArray.includes(second[j])) {
      newArray.push(second[j]);
    }
  }
  return newArray;
}

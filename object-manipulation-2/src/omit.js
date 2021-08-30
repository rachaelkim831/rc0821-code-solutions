/* exported omit */
function omit(source, keys) {
  var newObject = {};
  for (const property in source) {
    if (keys.indexOf(property) === -1) {
      newObject[property] = source[property];
    }
  }
  return newObject;
}

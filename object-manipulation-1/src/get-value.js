/* exported getValue */
function getValue(object, key) {
  for (const property in object) {
    if (property === key) {
      return object[property];
    }
  }
  return undefined;
}

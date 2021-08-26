/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value && i >= 0) {
      return i;
    }
  }
  return -1;
}

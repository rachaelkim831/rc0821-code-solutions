/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value && i >= 0) {
      return true;
    }
  }
  return false;
}

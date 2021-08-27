/* exported initial */
function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

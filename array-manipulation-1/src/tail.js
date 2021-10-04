/* exported tail */
function tail(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

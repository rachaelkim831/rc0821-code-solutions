/* exported toObject */
function toObject(keyValuePair) {
  const object = {
    [keyValuePair[0]]: keyValuePair[1]
  };
  return object;
}

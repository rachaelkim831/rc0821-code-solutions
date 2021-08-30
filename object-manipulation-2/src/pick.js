/* exported pick */
function pick(source, keys) {
  var newObject = {};
  for (let i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source[key] !== undefined) {
      newObject[key] = source[key];
    }
  }
  return newObject;
}

/*
{
  foo: 1,
  bar: 2
}

['foo', 'bar']
*/

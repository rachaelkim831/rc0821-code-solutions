/* exported defaults */
function defaults(target, source) {
  for (const property in source) {
    if (target[property] === undefined) {
      target[property] = source[property];
    }
  }
}

//

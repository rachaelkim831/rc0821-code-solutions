/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const val = stack.pop();
  if (val === undefined) {
    return undefined;
  }

  const second = stack.peek();
  stack.push(val);
  return second;
}

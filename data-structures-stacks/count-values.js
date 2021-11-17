/* exported countValues */

function countValues(stack) {
  let i = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    i++;
  }
  return i;
}

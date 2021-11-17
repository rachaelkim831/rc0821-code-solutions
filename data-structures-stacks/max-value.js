/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  while (stack.peek() !== undefined) {
    const value = stack.pop();
    if (value > max) {
      max = value;
    }
  }
  return max;
}

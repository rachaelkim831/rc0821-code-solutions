/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  let first = queue.dequeue();
  if (queue.peek() === undefined) {
    return first;
  }

  while (true) {
    if (queue.peek() >= first) {
      return first;
    }
    const value = queue.dequeue();
    queue.enqueue(first);
    first = value;
  }
}

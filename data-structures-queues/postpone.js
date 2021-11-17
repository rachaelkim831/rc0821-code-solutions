/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return null;
  } else {
    const first = queue.dequeue();
    queue.enqueue(first);
  }
}

/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const temp = list;
  const newer = new LinkedList(value);
  newer.next = temp;
  return newer;
}

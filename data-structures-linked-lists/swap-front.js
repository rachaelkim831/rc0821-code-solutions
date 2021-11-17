/* exported swapFront */

function swapFront(list) {
  if (!list.next) {
    return list;
  }
  const tmp = list.data;
  list.data = list.next.data;
  list.next.data = tmp;
  return list;
}

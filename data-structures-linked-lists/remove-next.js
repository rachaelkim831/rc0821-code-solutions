/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return null;
  }
  const tmp = list.next.next;
  list.next = list.next.next;
}

/* exported updateNext */

function updateNext(list, value) {
  if (!list.next) {
    return null;
  }
  list.next.data = value;
}

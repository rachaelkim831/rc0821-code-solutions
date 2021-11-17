/* exported getTail */

function getTail(list) {
  let tmp = list;
  while (tmp.next) {
    tmp = tmp.next;
  }
  return tmp.data;
}

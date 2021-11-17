/* exported includes */

function includes(list, value) {
  let tmp = list;
  while (tmp) {
    if (tmp.data === value) {
      return true;
    }
    tmp = tmp.next;
  }
  return false;
}

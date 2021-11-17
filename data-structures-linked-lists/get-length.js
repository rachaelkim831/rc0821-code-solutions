/* exported getLength */

function getLength(list) {
  let i = 1;
  let tmp = list.next;
  while (tmp) {
    tmp = tmp.next;
    i++;
  }
  return i;
}

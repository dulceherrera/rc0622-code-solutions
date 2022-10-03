/* exported removeNext */

function removeNext(list) {
  const secondNode = list.next;
  if (secondNode === null) {
    return;
  }
  list.next = list.next.next;
}

/* exported isEmpty */

function isEmpty(queue) {
  if (typeof queue.peek() === 'undefined') {
    return true;
  } else {
    return false;
  }
}

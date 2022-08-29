function map(array, transform) {
  const mapArr = [];
  for (let i = 0; i < array.length; i++) {
    const transfomed = transform(array[i]);
    mapArr.push(transfomed);
  }
  return mapArr;
}

const newMap = map([2, 4, 6, 8, 10], number => number / 2);
console.log('newMap', newMap);

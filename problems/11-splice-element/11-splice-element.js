/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let newArr = {
    ...someArr.splice(index,1)
  }
  someArr = newArr;
}

let myArr = [
    1,
    4,
    5,
    2,
    3
]

console.log(`My Array is ${myArr}
I am now running the function`);
spliceElement(myArr, 3); // number can be changed in the argument.
console.log(myArr);
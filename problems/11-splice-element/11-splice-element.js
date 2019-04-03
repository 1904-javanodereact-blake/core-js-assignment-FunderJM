/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  someArr.splice(index);
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
spliceElement(myArr, 2);
console.log(myArr);
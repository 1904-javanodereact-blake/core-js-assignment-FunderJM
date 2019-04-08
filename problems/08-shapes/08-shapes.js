/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch (shape) {
    case 'Triangle':
      let triArr = [];
      for (let h = 0; h < height; h++) {
        triArr.unshift(character);
        console.log(triArr.join(''));
      }
      break;
    case 'Square':
      let sqArr = [];
      for (let w = 0; w < height; w++) {
        sqArr.unshift(character);
      }
      for (let h = 0; h < height; h++) {
        console.log(sqArr.join(''));
      }
      break;
    case 'Diamond':
    let blank = " ";
    let count = Math.trunc(height/2);          
    let rebound = 0;
    let fillCount = 1;
    let refill = height -2;
    
    
    for (let h = 0; h < height; h++) {

      if (count > 0) {
        console.log(blank.repeat(count - 1),character.repeat(fillCount));
        count--;
        fillCount = fillCount + 2;
      }else if(count === 0 && rebound === 0){
        console.log(character.repeat(height));
        rebound++;          
      }else if(rebound > 0 ){
        console.log(blank.repeat(rebound-1),character.repeat(refill));
        refill = refill -2;
        rebound++;
      }
    }
    break;
  }
}

console.log('This is a Triangle:');
printShape('Triangle', 5, "$");
console.log('This is a Square:');
printShape('Square', 3, "%");
console.log('This is a Diamond:');
printShape('Diamond', 7, "*");
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
    let diArr = [];           
    let rebound = 0;
    let delcount = 1;
    let refill = height - 1;
    for (let h = 0; h < height; h++) {
      diArr[h] = ' ';
    }

    let count = Math.floor(diArr.length/2);
    
    for (let h = 0; h < height; h++) {

      if (count > 0 && rebound === 0) {
        for(let n = 0; n < delcount; n++){
          diArr[count] = character;
        }
        console.log(diArr.join(''));
        count--;
        delcount = delcount + 2;
      }else if(count === 0 && rebound === 0){
        for(let m = 0; m<height; m++){
          diArr[m] = character;
        }
        console.log(diArr.join(''));
        rebound++;          
      }else if(rebound > 0 ){
        for(let p = rebound; p < refill; p++){
          diArr[p] = character;
        }
        
        console.log(diArr.join(''));
        rebound = rebound + 1;
        refill--;
      }
    }
      break;
  }
}

console.log('This is a Triangle:');
printShape('Triangle', 3, "$");
console.log('This is a Square:');
printShape('Square', 3, "%");
console.log('This is a Diamond:');
printShape('Diamond', 5, "*");
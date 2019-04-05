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
  switch(shape){
    case 'Triangle':
    let triArr =[];
    for(let h =0; h < height; h++){
      triArr.unshift(character);
      console.log(triArr.join(''));
    }
    break;
    case 'Square':
    let sqArr = [];
    for(let w =0; w < height; w++){
      sqArr.unshift(character);
      }
    for(let h =0; h < height; h++){
      console.log(sqArr.join(''));
    }
    break;
    case 'Diamond':
    let diArr = [];
    let rowArr = [];
    for(let h = 0; h < height; h++){
      rowArr.unshift('');
    }
    for(let h = 0; h < height; h++){
      diArr.unshift(rowArr);
    }
    break;
  }
}

console.log('This is a Triangle:');
printShape('Triangle', 7, "$");
console.log('This is a Square:');
printShape('Square', 3, "%");
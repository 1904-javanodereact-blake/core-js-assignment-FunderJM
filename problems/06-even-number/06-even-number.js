/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let even= (someNum - Math.floor(someNum)) == 0;

  if(even){
      console.log(`True`);
      console.log((someNum - Math.floor(someNum)));
  }else{
      console.log(`False`);
      console.log((someNum - Math.floor(someNum)));
  }
}

let a = isEven(9);

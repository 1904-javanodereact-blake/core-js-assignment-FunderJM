/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let testArr = someStr.split('');
    let bool = false;
    let i = testArr.length -1;
    let n = 0;

    for(n; n <= i; n ++){
        let front = testArr[n];
        let back = testArr[i];
        if(front === back){
             bool = true;
        }else if(front != back){
            bool = false;
            break;
         }
         i--;
    }

    return bool;
}

  console.log(`'Racecar' is a palindrome. ${isPalindrome('racecar')}`);
  console.log(`'Anna' is a palindrome. ${isPalindrome('anna')}`);
  console.log(`'civic' is a palindrome. ${isPalindrome('civic')}`);
  console.log(`'Max' is a palindrome. ${isPalindrome('Max')}`);
  console.log(`'redder' is a palindrome. ${isPalindrome('redder')}`);
  console.log(`'Edible' is a palindrome. ${isPalindrome('edible')}`);
/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let testStr = 'test';
    let secArr = [];
    let count = 0;

    if(typeof(someStr) === typeof(testStr)){
        let thisArr = someStr.split('');
        for(startIndex; startIndex < endIndex; startIndex++){
            secArr[count] = thisArr[startIndex];
            count++;
        }
        return secArr.join('');
    } else {
        return `${someStr} is not a string of text, please enter a string.`;
    }
    
}

console.log(substring('hello',0,3));
console.log(substring('Maximillian',2,7));
console.log(substring('Triskaidekaphobia',11,16));
console.log(substring(5,2,4));
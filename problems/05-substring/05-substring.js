/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    let thisArr = someStr.split('');
    let secArr = [];
    let count = 0;

    for(startIndex; startIndex < endIndex; startIndex++){
        secArr[count] = thisArr[startIndex];
        count++;
    }

    return secArr.join('');
}

console.log(substring('hello',0,3));
console.log(substring('Maximillian',2,7));
console.log(substring('Triskaidekaphobia',11,16));
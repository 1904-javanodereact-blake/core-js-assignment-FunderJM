/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let funArr = someStr.split('');
    let funArr2 = [];

    for(let n = someStr.length - 1; n >= 0; n--){
        funArr2.push(funArr[n]);
    }
    return funArr2;
}

console.log(reverseStr('Hello world!'));
console.log(reverseStr('This is a test.'));
console.log(reverseStr('As is this.'));
console.log(reverseStr('I think it is working'));
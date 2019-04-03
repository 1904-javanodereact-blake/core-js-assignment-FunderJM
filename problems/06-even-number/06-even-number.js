/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let div = someNum/2;
    let numerator = Math.trunc(div);
    let mult = numerator * 2;

    if(someNum == mult){
        console.log(true);
    }else if(someNum != mult){
        console.log(false);
    }
}

let a = 13;

console.log(`The number ${a} is even.`);
isEven(a);


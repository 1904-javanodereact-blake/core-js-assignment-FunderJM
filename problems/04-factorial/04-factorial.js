/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    //let n = sumNum;
    //let fac = 1;

    //for(n; n > 0; n--){
        //fac = fac * n;
    //}

    //console.log(fac);
    let n = 1;
    let m = sumNum

    if(m>0){
        n = m * factorial(m-1);
        return n;
    }else{
        return n;
    }
    
}

console.log(`The factorial of 7 is: ${factorial(7)}`);
console.log(`The factorial of 6 is: ${factorial(6)}`);
console.log(`The factorial of 5 is: ${factorial(5)}`);
console.log(`The factorial of 4 is: ${factorial(4)}`);
console.log(`The factorial of 3 is: ${factorial(3)}`);
console.log(`The factorial of 10 is: ${factorial(10)}`);
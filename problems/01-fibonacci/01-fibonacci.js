/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(n == 0){
        return 0;
    }
    if(n ==1){
        return 1;
    }else{
        return fib(n-1) + fib(n-2);
    }
}


console.log(`The 7th number in the fibonacci sequense is : ${fib(7)}`);
console.log(`The 13th number in the fibonacci sequense is : ${fib(13)}`);
console.log(`The 24th number in the fibonacci sequense is : ${fib(24)}`);
console.log(`The 4th number in the fibonacci sequense is : ${fib(4)}`);
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

let fi = fib(20);
console.log(fi);
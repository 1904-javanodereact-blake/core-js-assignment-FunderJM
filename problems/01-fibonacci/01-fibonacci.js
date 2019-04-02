/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(n == 0){
        // If n is equal to 0, there is no need to run any more functions.
        return 0;
    }
    if(n ==1){
        // If n is equal to 1, when put in an array. You would get the number 1.
        return 1;
    }else{
        // By running the function within the function, it forces the program to run the sequence from a
        // top-down perspective.
        return fib(n-1) + fib(n-2);
    }
}

let fi = fib(7); // where I assign the value of n.
console.log(fi);
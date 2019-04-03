/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let lean = true;
    do{
        let n = 0;
        let m = numArray.length;
        for(n; n < numArray.length; n++){
            for(m; m > n; m--){
            if(numArray[n] > numArray[numArray.length]){
                let placeholder = numArray[numArray.length];
                numArray[numArray.length] = numArray[n];
                numArray[n] = placeholder;
                Console.log(numArray);
            }else{
                lean = false;
            }
        }
        }
    }while(lean != false)
}

let myArr = [
    5,
    2,
    4,
    3,
    1
]

console.log(`This is my array: ${myArr}`);

bubbleSort(myArr);

console.log(`This is my sorted array: ${myArr}`);
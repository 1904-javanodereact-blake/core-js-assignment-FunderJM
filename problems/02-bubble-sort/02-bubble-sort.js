/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let a = numArray.length - 1;
    let n = 0;

    for(n; n<a; n++){
        for(a; a>n; a--){
            if(numArray[n] > numArray[a]){
                let ph = numArray[a];
                numArray[a] = numArray[n];
                numArray[n] = ph;
                console.log(numArray);
            }
        }
    }
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
/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let a = numArray.length;
    let n = 1;

    for(n; n<a; n++){
        for(let j = n; j>0 ; j--){
            if(numArray[j] > numArray[j+1]){
                let pH = numArray[j+1];
                numArray[j+1] = numArray[j];
                numArray[j] = pH;
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
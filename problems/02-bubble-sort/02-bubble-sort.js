/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let a = numArray.length;
    let n = 0;
    let trade = false;

    do{
        for(n; n<a; n++){
            if(numArray[n] > numArray[n+1]){
                let pH = numArray[n+1];
                numArray[n+1] = numArray[n];
                numArray[n] = pH;
            }else if(numArray[n]< numArray[n+1]){
                let pH = numArray[n];
                numArray[n] = numArray[n+1];
                numArray[n+1] = pH; 
                trade = true;
            }
        }
    }while(trade != true)
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
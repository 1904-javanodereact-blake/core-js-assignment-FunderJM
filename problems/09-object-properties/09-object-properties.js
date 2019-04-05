/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(let prop in someObj){
        console.log(`Property = ${prop}
  and value = ${someObj[prop]}`);
    }
}

let car = {
    name: 'Charger',
    weight: 4200,
    maxSpeed: 175
};

console.log('This is a car and its properties:');
objectProperties(car);
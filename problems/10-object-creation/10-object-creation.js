/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let osVersion = {
    name: 'Windows 7',
    age: '9 '
}

class OS{
    function constructor [name,age]{
        this.name = name;
        this.age = age;
    }
}

let myOS = new OS('Windows 10','3');

let worstOS = {
    function constructor: [name = 'Windows 8', age = '6'];
}

console.log('This is the best OS : ', osVersion);
console.log('This is my current OS : ', myOS);
console.log('This is the worst OS: ', worstOS);
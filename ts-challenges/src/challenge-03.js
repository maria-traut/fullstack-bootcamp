"use strict";
const fruits = ['apple', 'banana', 'cherry'];
function shoutAll(items) {
    return items.map(item => item.toUpperCase());
}
function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(shoutAll(fruits));
console.log(sum([10, 20, 30]));

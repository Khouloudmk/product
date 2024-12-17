function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hi there"));


function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hi there"));


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hi there"));


function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([0, 2, 4, 6, 8]));

function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([0, 2, 4, 6, 8]));


function sumArray(arr) { 
    return arr.reduce((sum, num) => sum + num, 0); 
} 
console.log(sumArray([0, 5, 10]));


function filterArray(arr, predicate) {
    return arr.filter(predicate);
}
console.log(filterArray([-1, 2, 0, 8], num => num <= 2));


function factorial(n) { 
    if (n === 0) return 1; return n * factorial(n - 1); 
}
console.log(factorial(3));


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(2));


function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence.slice(0, n);
}
console.log(fibonacci(4));



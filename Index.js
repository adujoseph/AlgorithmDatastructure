
// String, Number, Object, Array
let name = 'LindaGift';
let age = 27
let person = {}
let peoples = []



// console.log(name.split('').reverse().join());

// 100%5 === 0
// From a number of 1 to 100, print fizz if it is divisible by 3, buzz if it is divisible by 5 and fizzbuzz if it is divisible by 15

const fizzbuzz = () => {

}

const palindrome = (name) => {
   const reverse_name = name.split('').reverse().join('');
   if(name === reverse_name){
    return true
   } else {
    return false
   } 
}

console.log(palindrome('madamu'));
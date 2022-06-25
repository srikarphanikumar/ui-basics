console.log("**************** LOOPS & CONDITIONS ****************");

/** LOOPS
 * 1) for loop
 * 2) while
 * 3) doWhile
 */

/**
 * CONDITIONS:
 * 1) if, else, else if
 * 2) switch
 * 3) break
 * 4) continue
 */

/** LOOPS */

// FOR LOOP (always runs on an array)


/**
 *  
 Syntax: for(let i=startingValue; condition; increment/decrement) {
     logic
    }
    */
   
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18];

// console.log('************ First to last ***********');

// Using old syntax
// for (let index=0; index<numbers.length; index++) {
//     console.log('Numbers at position: ', index, ' is:', numbers[index]);
// } 

// Using ES6 syntax: Way1
// to get index
// console.log('*********** Way-1 For index (start) **************');
// console.log('                                      ');
for (let i in numbers) {
    // console.log('Using Way-1 ES6 format: Index: ', i)
    // console.log('Using Way-1 ES6 format: Value: ', numbers[i])
    // console.table('Index', i, 'Values:', numbers[i])
}
// console.log('*********** Way-1 for index (end) **************');
// console.log('                                      ');

// console.log('*********** Way-1 for value (start) **************');
// console.log('                                      ');

// to get value
for (let i of numbers) {
    // console.log('Using Way-1 ES6 format: Value: ', i)
}
// console.log('*********** Way-1 for value (end) **************');
// console.log('                                      ');

// Way-2 ES6

numbers.forEach((num, i) => {
    // console.log('Using For Each: ', num, 'with index: ', i)
});


// console.log('************ Last to first ***********');
// for (let index=numbers.length-1; index >= 0 ; index--) {
//     console.log('Numbers at position: ', index, ' is:', numbers[index]);
// } 


// EXAMPLES: 
// Example-1: Multiply each number by 2

let numbs = [1, 2, 3, 4];
console.log('Numbs before: ', numbs);
let productArray = [];
numbs.forEach(eachNum => {
    const x = eachNum * 2;
    productArray.push(x);
})
console.log('productArray after: ', productArray);

// Eg: 2 Sum of first 10 natural numbers
// &&&
// Eg-3: Product of 1st 10 natural numbers: 
// Natural numbers: 1 to Infinity
// Whole numbers: 0 to Infinity
// Integers: -Infinity to +Infinity
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let sum = 0;
let product = 10;

for (let i=1; i<1; i++) {
    sum = sum + i;
    // console.log('Sum in loop: ', sum);
}
console.log('Total Sum: ', sum)


/** WHILE LOOP */
let index = 1;

// while(index <= 0) {
//     product = product * index;
//     index++;
// }
// console.log('Total product: ', product)


/** Do While Loop */
/** Will run the loop even if condition is not met */

let index2 = 2;

do {
    product = product * index2;
    console.log('Hi')
    index2++;
} while (index2 < 1);

console.log('Total product: ', product)

/** CONDITIONS: if, else if, else, switch, break, continue */

// Eg: Fizz Buzz using 3 & 5
/**
 * Print from 1 to 50;
 * 3: Fizz
 * 5: Buzz
 * 15: FizzBuzz
 * Required o/p: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz
 */
for (let num=1; num<=50; num++) {
    // Using if-[else-if]-else
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (num % 3 === 0) {
        console.log('Fizz');
    } else if (num % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(num)
    }
}

// const fruits = ['Tomato', 'Onion', 'Okra', 'Lemon', 'Biryani', 'Chicken', 'Mutton'];
console.clear();
let fruit = 'Tomato';
let text = 'I like ';
switch (fruit) {
    case 'Tomato': 
        text+= 'Tomato';
        break;
    case 'Onion': 
        text+= 'Onion';
        break;
    case 'Okra': 
        text+= 'Okra';
        break;
    case 'Lemon': 
        text+= 'Lemon';
        break;
    case 'Biryani': 
        text+= 'Biryani';
        break;
    default: 
        text+= 'Something else';
        break;
}
console.log('Text: ', text);
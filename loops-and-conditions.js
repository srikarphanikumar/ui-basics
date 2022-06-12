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

// Eg: 2 Sum of first 10 natural numbers;
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

let sum = 0;

for (let i=1; i<=10; i++) {
    sum = sum + i;
}
console.log('Sum: ', sum)

/** Homework: 
 *     +
 *    +++
 *   +++++
 *  +++++++
 */
/**
 * Arrays = Collection of data;
 * 
 * Index starts from 0;
 * 
 * So if length of an array = l, the indices range from 0 to l-1
 */

const str = 'srikar phani kumar marti';
const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log('Array =', array)

const arr1 = ['srikar', 1, true, null, undefined, {age: 40}];
// console.log('Array 1: ', arr1);

// console.log('Array Length: ', array.length);
// console.log('Element at 0th position in array: ', array[0]);
// console.log('Element at 1st position in array: ', array[1]);
// console.log('Element at -1th position in array: ', array[-1]); // undefined
// console.log('Element at 7th position in array: ', array[7]); // undefined


// console.log('Array before changing 2nd element: ', array);
// array[1] = 'h';
// console.log('Array after changing 2nd element: ', array);

// array[1] = 'b';
// console.log('Array after changing to initial setting: ', array);

/**
 * Define size but dont give any value: Array(size)
 * Define size but give initial value: Array(size).fill(initialValue): 
 *      Eg: Array(10).fill(0);
 * Just make sure its an array: const marks = [];
 */
const fruits = [];
console.log('fruits: ',  fruits);
// console.log('Type of fruits: ', typeof(fruits)) // object even though it is an array.


/** In built array functions: 
 * length: gives you length of the array
 * push: pushes a value into array 
 *      (if array is empty, pushes to 0th index, otherwise currentIndex+1)
 * pop: Last element / list of given last elements
 * concat: join 2 arrays
 * shift: removes first element
 * unshift: adds element to the first place;
 */

/// PUSHING INTO ARRAYS: 

// Way-1: use built in push function; 

console.log('*********** PUSH (start) **************');

fruits.push('Apple');
console.log('fruits after pushing apple: ',  fruits);

fruits.push('Banana');
console.log('fruits after pushing banana: ',  fruits);

fruits.push('Lime');
console.log('fruits after pushing Lime: ',  fruits);
console.log('Fruits.length: ', fruits.length)

// Current fruit length: 3
// Indices are running from 0 to 2
// Trying to push into 3
// Way-2: 
fruits[3] = 'Mango';
console.log('Fruits after pushing Mango: ', fruits)
console.log('Fruits length after pushing Mango: ', fruits.length); // output: 4

fruits.push('Watermelon', 'Grapes', 'Strawberry');
console.log('Fruits after pushing set of fruits: ', fruits)
// fruits.length = 2;
// console.log('Fruits after setting length to 2: ', fruits); // output: 4



// const secondSetOfFruits = ['Watermelon', 'Grapes', 'Strawberry'];

// fruits.push(...secondSetOfFruits); // ... is called spread operator
// console.log('Fruits after pushing secondSetOfFruits: ', fruits)
console.log('*********** PUSH (end) **************');
console.log('                                      ');


// POP
// if pop() is used: last element will be returned
// if pop(-2) is used: last 2nd element will be returned
console.log('*********** Pop (start) **************');
const lastFruit = fruits.pop();
console.log('Last Fruit: ', lastFruit);

const last2ndFruit = fruits.pop(-2);
console.log('Last 2nd Fruit: ', last2ndFruit);
console.log('*********** Pop (end) **************');
console.log('                                      ');

// Concat:
console.log('*********** Concat (start) **************');
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = array1.concat(array2);
const combinedArray2 = array2.concat(array1);
console.log('Combined Array: ', combinedArray);
console.log('Combined Array2: ', combinedArray2);
console.log('*********** Concat (end) **************');
console.log('                                      ');


// Shift: (to get first element)
console.log('*********** Shift (start) **************');
const array3 = [1,2,3,4];
console.log('Original Array before shifting: ', array3);
const firstElement = array3.shift();
console.log('Array after shifting: ', array3);
console.log('First Element: ', firstElement);
console.log('*********** Shift (end) **************');
console.log('                                      ');

// UnShift: (to push element into first place)
console.log('*********** UnShift (start) **************');
const array4 = [5, 6, 7, 8];
console.log('Original Array before unshifting: ', array4);

array4.unshift(3);
console.log('Original Array after unshifting: ', array4);
console.log('*********** UnShift (end) **************');
console.log('                                      ');
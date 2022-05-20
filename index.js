console.log('******************************');
console.log('****** JAVASCRIPT COURSE *****');
console.log('******************************');

/**
 *  Data Types
 * 1. number (eg: 1, 2, 3, -12, 0, Infinity etc)
 * 2. string (eg: '1', 'example', 'ui basics')
 * 3. arrays : Collection of items (
 *   eg: [1, 2, 3] (Collection of numbers), 
 *       ['john', 'smith'] (Collection of strings), 
 *       [{ name: 'John', age: 42 }, { name: 'Smith', age: 53 }]) (Collection of items)
 * 4. boolean (eg: true , false)
 * 5. object  (eg: { name: 'John', age: 42 })
 * 6. undefined
 * 7. null 
*/


/** Strings
 * inbuilt functions: 
 *  .length, .indexOf(), .charAt(), .lastIndexOf(),
 *  .toUpperCase(), .toLowerCase()
 */
var str1 = 'long word';
console.log('str1: ', str1);

// Operations on strings
console.log('Str1 length: ', str1.length); // string length
console.log('Index of long:', str1.indexOf('long'));
console.log('Index of w: ', str1.indexOf('w'));
console.log('Index of d: ', str1.indexOf('d'));
// if its not there, it will return -1
console.log('Index of srikar: ', str1.indexOf('srikar')); 

var x = 'sri sri sri sri sri';
console.log('Last index of r: ', x.lastIndexOf('r'));

function findIndexOfChar(str, char) {
    let index;

    if (str.indexOf(char) !== -1) {
        index = str.indexOf(char);
    } else {
        index = -1
    }

    console.log('******************************');
    console.log('Given Str: ', str);
    console.log('Find index of: ', char);
    console.log('Index of given char = ', index);
    console.log('******************************');

    return index;
}

var str2 = 'alskjhfdlasdkjfhlasdkjfhlaskdhjflaskdjflakbn lkasjfdnb lHSAVFNVBLKH';
var charToFind = 'y';

console.log('Find index using funciton ==>', findIndexOfChar(str2, charToFind))


console.log('Char at index 0: ', str1.charAt(0))
console.log('Char at index 4: ', str1.charAt(4))
console.log('Char at index 7: ', str1.charAt(7))

console.log('abcd to uppercase: ', 'abcd'.toUpperCase());
console.log('ABCD to lowercase: ', 'ABCD'.toLowerCase());


// replace
const varName = 'srikar';
console.log('Replace sri in srikar to abc: ', varName.replace('sri', 'abc'))

function replacePartOfStr(str, replaceTo) {
    return str.replace(str, replaceTo + str);
}

console.log("replacePartOfStr('72625', 'PL')", replacePartOfStr('72625', 'PL'));


/** Reserved Words: var, let, const, function */

/** 
 * Variables
 * 3 different ways of declaration
 * var, let, const
*/ 

// Syntax: "var variable_name = value"
// var b = 'ui basics';
// var c = [1, 2, 4, 5];
// var d = {
    //     name: 'John',
    //     age: 42
    // };
// var e = true;
// var f = undefined;
// var g = null;
    
var a = 1;
a = 30;
// console.log('A ==>', a);

// LET: "let variable_name = value"
let someNumber = 2;
someNumber = 4;
// console.log('Some number ==>', someNumber);

// const: "const variable_name = value"
const constantValue = 3;
// constantValue = 6 (Type error: value cannot be changed if there is a given type)
// console.log('constantValue ==>', constantValue)


a = 40;
someNumber = 50;
/** Functions */
function helloWorld() {
    let x = 3;
    // console.log('x: ', x);
    if (x === 3) {
        let y = 4;
        // console.log('y: ', y)
        const z = 5;
        // console.log('z: ', z)
    }
}

helloWorld();

// console.log('after hello world');

/** Add 2 numbers  */
function addAny2Values(x, y) {
    return x+y;
}

var sum = addAny2Values(3, 4);
// console.log('Sum ==>', sum);

var sumWithStrs = addAny2Values('srikar', 4)
// console.log('SumWithStrs =>', sumWithStrs);


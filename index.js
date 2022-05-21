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


/** 
 * Strings
 * inbuilt functions: 
 * .length (gives you the length of the string), 
 * .indexOf() (give you indexOf a particular character), 
 * .charAt() (gives you particular character at a given index/position), 
 * .lastIndexOf() (gives you the index/position of the lastIndex of the given char),
 * .replace(),
 * .toUpperCase(), 
 * .toLocaleUpperCase(),
 * .toLowerCase(),
 * .toLocaleLowerCase(),
 * .concat()
 */
var str1 = 'long word';
// console.log('str1: ', str1);

// Operations on strings
// console.log('Str1 length: ', str1.length); // string length
// console.log('Index of long:', str1.indexOf('long'));
// console.log('Index of w: ', str1.indexOf('w'));
// console.log('Index of d: ', str1.indexOf('d'));
// if its not there, it will return -1
// console.log('Index of srikar: ', str1.indexOf('srikar')); 

var x = 'sri sri sri sri sri';
// console.log('Last index of r: ', x.lastIndexOf('r'));

function findIndexOfChar(str, char) {
    let index;

    if (str.indexOf(char) !== -1) {
        index = str.indexOf(char);
    } else {
        index = -1
    }

    // console.log('******************************');
    // console.log('Given Str: ', str);
    // console.log('Find index of: ', char);
    // console.log('Index of given char = ', index);
    // console.log('******************************');

    return index;
}

var str2 = 'alskjhfdlasdkjfhlasdkjfhlaskdhjflaskdjflakbn lkasjfdnb lHSAVFNVBLKH';
var charToFind = 'y';

// console.log('Find index using funciton ==>', findIndexOfChar(str2, charToFind))


// console.log('Char at index 0: ', str1.charAt(0))
// console.log('Char at index 4: ', str1.charAt(4))
// console.log('Char at index 7: ', str1.charAt(7))

// console.log('abcd to uppercase: ', 'abcd'.toUpperCase());
// console.log('ABCD to lowercase: ', 'ABCD'.toLowerCase());


// replace
const varName = 'srikar';
// console.log('Replace sri in srikar to abc: ', varName.replace('sri', 'abc'))

function replacePartOfStr(str, replaceTo) {
    return str.replace(str, replaceTo + str);
}

// console.log("replacePartOfStr('72625', 'PL')", replacePartOfStr('72625', 'PL'));


// concat; (joining 2 strings)
var p = 'hello';
var q = 'world';
var r = p.concat(' ' + q); // actual concatenation
// console.log('concat eg: R ==>', r)

var s = p + ' ' + q; // easy use
// console.log('concat eg: S ==>', s)

var firstName = 'John';
var lastName = 'Smith';

var fullName = firstName + ' ' + lastName;
// console.log('concat eg: Full Name: ', fullName)

// split(); VERY IMPORTANT
var para = 'hi how are you and what are you doing? hi how are you and what are you doing? hi how are you and what are you doing?';
// console.log('Para length: ', para.length);
var differentWordsArray = para.split(' ');
// console.log('differentWordsArray: ', differentWordsArray)
// console.log('differentWordsArray length: ', differentWordsArray.length);


var eg2 = 'VANGUARD\\UVSQ';
var eg2SplitArray = eg2.split('\\');
// console.log('eg2SplitArray =>', eg2SplitArray)


var eg3 = 'hi;how;are;you;and;what;are;you;doing?';
var eg3SplitArray = eg3.split(';');
// console.log('eg3SplitArray =>', eg3SplitArray)

var eg4 = 'hello';
var eg4SplitArray = eg4.split('');
// console.log('eg4SplitArray =>', eg4SplitArray);

// join(); VERY IMPORTANT; (study about escape characters)
var wordsArray = ['hello', 'world', 'how', 'are', 'you', '?'];
var wordsCombined = wordsArray.join('\t');
// console.log('wordsCombined =>', wordsCombined);

var wordsArray2 = ['VANGUARD', 'UVSQ'];
var wordsCombined2 = wordsArray2.join("//");
// console.log('wordsCombined2 =>', wordsCombined2);

// slice(startAtIndex, endAtIndex);
// it will return upto endAtIndex-1
// endAtIndex is optional | if not given it will return the rest  of the string from startAtIndex
var eg5 = 'hello';
var eg5SplitArray = eg5.slice(2,4);
// console.log('eg5SplitArray =>', eg5SplitArray);

var eg6 = 'PNC|BUSINESS-CHECKING';
var eg6SplitArray = eg6.slice(4);
// console.log('eg6SplitArray =>', eg6SplitArray);
// console.log('eg6SplitArray other way using split() =>', eg6.split('|'));

/** Numbers */
console.log('**********************************');
console.log('********** NUMBERS ***************');
console.log('**********************************');

var num1 = 2;
var num2 = 3;
var num3 = 4;
var num4 = 20;
var num5 = 35;
console.log('Num1: ', num1)
console.log('Num2: ', num2)
console.log('Num3: ', num3)
console.log('Num4: ', num4)
console.log('Num5: ', num5)

// add
var add = num1 + num2 + num3;
console.log('Addition result of num1, num2 & num3 ==>', add);

// sub
var sub = num1-num2-num3;
console.log('Subtraction result of num1 & num2 ==>', sub);

// multiplication
var product = num1 * num2 * num3;
console.log('Multiplication result of num1, num2 & num3 ==>', product);

// division
/**
 * 3) 4 (1 <-- quotient
 *  - 3
 * ------
 *    1 <-- remainder
 * ------
 * 
 * 
 * 2) 4 (2
 *  - 4
 * ------
 *    0 <-- remainder
 * ------
 * 
 * 
 * 20) 35 (1
 *   - 20
 * ------
 *    15 <-- remainder
 * ------
 * 
 */
var divisionResult = num3 / num2;
console.log('Division result of num3 / num2 ==>', divisionResult);

var remainder = num3 % num2;
console.log('remainder result of num3 % num2 ==>', remainder);

var remainder2 = num3 % num1;
console.log('remainder2 result of num3 % num2 ==>', remainder2);

var remainder3 = num5 % num4;
console.log('remainder3 result of num5 % num4 ==>', remainder3);

function isEvenOrNot(num) {
    return num % 2 == 0;
}

console.log('isEvenOrNot for 4:', isEvenOrNot(4));
console.log('isEvenOrNot for 5:', isEvenOrNot(5));

// Different ways of operating;
// var add2 = add + 1;
add += 1; // this is equal to add = add + 1;
sub -= 1; // this is equal to sub = sub - 1;
product *= 2; // this is equal to product = product * 2;

console.log('Add Final Value: ', add);
console.log('sub Final Value: ', sub);
console.log('product Final Value: ', product);

/** Reserved Words: var, let, const, function */

/** Escape Characters: 
 * \n: next line
 * \t: tab
 */

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


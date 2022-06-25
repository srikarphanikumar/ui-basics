// /** Numbers */
// // console.log('**********************************');
// // console.log('********** NUMBERS ***************');
// // console.log('**********************************');

// /** Built-in functions
//  * addition (3+2)
//  * subtraction (3-2)
//  * multiplication (3*2)
//  * division:
//  *      quotient = (3/2) 
//  *      remainder = (3%2) 
//  *
//  * parseInt(numberToParse, baseToConvert):
//  *      Eg: parseInt(10, 2)[BINARY], parseInt(100, 10)[DECIMAL]
//  *      parseInt(100, 8)[OCTAL], parseInt(100, 16)[HEXA]
//  *
//  * parseFloat(numberToParse, baseToConvert):
//  *      Eg: parseFloat(10, 2)[BINARY], parseFloat(100, 10)[DECIMAL]
//  *      parseFloat(100, 8)[OCTAL], parseFloat(100, 16)[HEXA]
//  *
//  * Math.floor(): round off to lower integer
//  * Math.ceil(): round off to higher integer
//  * Math.random(): random number between 0 & 1
//  * Math.min(num1, num2, ....);
//  * Math.max(num1, num2, ....);
//  *
//  * Converting number to string:
//     *  Way-1: num + '';
//     *  Way-2: String(num);
//  * Converting string to number: +string;
//     *  Way-1: +str;
//     *  Way-2: Number(str);
// */

// // var num1 = 2;
// // var num2 = 3;
// // var num3 = 4;
// // var num4 = 20;
// // var num5 = 35;
// // // console.log('Num1: ', num1)
// // // console.log('Num2: ', num2)
// // // console.log('Num3: ', num3)
// // // console.log('Num4: ', num4)
// // // console.log('Num5: ', num5)

// // add
// var add = num1 + num2 + num3;
// // // console.log('Addition result of num1, num2 & num3 ==>', add);

// // sub
// var sub = num1-num2-num3;
// // // console.log('Subtraction result of num1 & num2 ==>', sub);

// // multiplication
// var product = num1 * num2 * num3;
// // // console.log('Multiplication result of num1, num2 & num3 ==>', product);

// // division
// /**
//  * 3) 4 (1 <-- quotient
//  *  - 3
//  * ------
//  *    1 <-- remainder
//  * ------
//  *
//  *
//  * 2) 4 (2
//  *  - 4
//  * ------
//  *    0 <-- remainder
//  * ------
//  *
//  *
//  * 20) 35 (1
//  *   - 20
//  * ------
//  *    15 <-- remainder
//  * ------
//  *
//  */
// var divisionResult = num3 / num2;
// // // console.log('Division result of num3 / num2 ==>', divisionResult);

// var remainder = num3 % num2;
// // // console.log('remainder result of num3 % num2 ==>', remainder);

// var remainder2 = num3 % num1;
// // // console.log('remainder2 result of num3 % num2 ==>', remainder2);

// var remainder3 = num5 % num4;
// // // console.log('remainder3 result of num5 % num4 ==>', remainder3);

// function isEvenOrNot(num) {
//     return num % 2 == 0;
// }

// // // console.log('isEvenOrNot for 4:', isEvenOrNot(4));
// // // console.log('isEvenOrNot for 5:', isEvenOrNot(5));

// // Different ways of operating;
// // var add2 = add + 1;
// add += 1; // this is equal to add = add + 1;
// sub -= 1; // this is equal to sub = sub - 1;
// product *= 2; // this is equal to product = product * 2;

// // // console.log('Add Final Value: ', add);
// // // console.log('sub Final Value: ', sub);
// // // console.log('product Final Value: ', product);

// /** Reserved Words: var, let, const, function */

// /** Escape Characters:
//  * \n: next line
//  * \t: tab
//  */

// /**
//  * Variables
//  * 3 different ways of declaration
//  * var, let, const
// */

// // Syntax: "var variable_name = value"
// // var b = 'ui basics';
// // var c = [1, 2, 4, 5];
// // var d = {
//     //     name: 'John',
//     //     age: 42
//     // };
// // var e = true;
// // var f = undefined;
// // var g = null;

// var a = 1;
// a = 30;
// // // console.log('A ==>', a);

// // LET: "let variable_name = value"
// let someNumber = 2;
// someNumber = 4;
// // // console.log('Some number ==>', someNumber);

// // const: "const variable_name = value"
// const constantValue = 3;
// // constantValue = 6 (Type error: value cannot be changed if there is a given type)
// // // console.log('constantValue ==>', constantValue)

// a = 40;
// someNumber = 50;
// /** Functions */
// function helloWorld() {
//     let x = 3;
//     // // console.log('x: ', x);
//     if (x === 3) {
//         let y = 4;
//         // // console.log('y: ', y)
//         const z = 5;
//         // // console.log('z: ', z)
//     }
// }

// helloWorld();

// // // console.log('after hello world');

// /** Add 2 numbers  */
// function addAny2Values(x, y) {
//     return x+y;
// }

// var sum = addAny2Values(3, 4);
// // // console.log('Sum ==>', sum);

// var sumWithStrs = addAny2Values('srikar', 4)
// // // console.log('SumWithStrs =>', sumWithStrs);

// // PARSEINT() returns only wholeNumber
// /**
//  * Number bases:
//  * Base 2 : Binary numbers (Total numbers in this system = 2 (which are 0 & 1))
//  * Base 8: Octal
//  * Base 10: Decimal / regular numbers (Total numbers in this system = 10 (which are 0 to 9))
//  * Base 16: Hex (Total numbers in this system = 16)
//  */

// // Homework: Convert Dec-hex, dec-octal, hex-decimal, octal-decimal

// /**
//  * Base 2 conversion:
//  * Eg: Decimal to Binary conversion of number 4
//  * (write in descending order in powers of 2)
//  * ------------------
//  * 2^3 2^2 2^1 2^0
//  *
//  * 8    4   2    1
//  * 0    1   0    0  (0100 / 100 in base-2) = 4 in Base-10
//  * ------------------
//  *
//  *
//  * Eg: 5
//  * ------------------
//  * 2^2 2^1 2^0
//  *  |   |    |
//  *  4   2    1
//  *  1   0    1      5 in Base-10 = 101 in base-2
//  * ------------------
//  *
//  *
//  * Eg: 20
//  * ------------------
//  * 2^4 2^3 2^2 2^1 2^0
//  *  |   |   |   |    |
//  *  16  8   4   2    1
//  *  1   0   1   0    0  20 in base-10 = 10100 in base-2
//  * ------------------
//  *
//  * Eg: 50
//  * ------------------
//  * 2^5 2^4 2^3 2^2 2^1 2^0
//  *  |   |   |   |   |    |
//  *  32  16  8   4   2    1
//  *  1    1   0   0  1    0  50 in base-10 = 110010 in base-2
//  * ------------------
//  *
//  *
//  *
//  * BINARY TO DECIMAL CONVERSION
//  *
//  * Eg: 110011100 in base-2
//  *
//  * Write all numbers seperately
//  *
//  * 8     7     6     5     4    3    2    1    0  power
//  * 256   128   64   32     16   8    4    2    1  (2^power value)
//  * 1     1     0     0     1    1    1    0    0  (actual given base-2 value)
//  * ----------------------------------------------
//  * 256+128+16+8+4 = 412
//  */
// var result = num5 / num4;

// // // console.log('Result for num5/num4: ', result);

// // when base is not given, it will be defaulted to 10
// var resultAfterModification = parseInt(result, 10);
// // // console.log('Result after modification ==>', resultAfterModification)

// // Parsefloat() returns wholeNumber+decimal points
// var result2 = num3 / num1;
// // // console.log('Result for num3/num1: ', result2);
// var parseFloatResult = parseFloat(result2);
// // // console.log('parseFloatResult after modification ==>', parseFloatResult)

// // Math.floor & Math.ceil
// // // console.log('Math.floor(3.2)', Math.floor(3.2));
// // // console.log('Math.floor(3.6)', Math.floor(3.6));
// // // console.log('Math.ceil(3.2)', Math.ceil(3.2));
// // // console.log('Math.ceil(3.6)', Math.ceil(3.6));

// // // console.log('Math.sqrt(4)', Math.sqrt(4));
// // // console.log('Math.abs(3.6)', Math.abs(3.6));
// // // console.log('Math.abs(-3.6)', Math.abs(-3.6));
// // // console.log('Math.pow(2,3)', Math.pow(2,3)); // => 2 to power 3 = 8

// // If nothing is given, it will produce random number between 0 & 1;
// var randomNumber = Math.random();
// // // console.log('randomNumber: ', randomNumber);

// var numberBtn1And10 = Math.floor(randomNumber * 10);
// // // console.log('numberBtn1And10: ', numberBtn1And10);

// var numberBtn1And100 = Math.floor(randomNumber * 100);
// // // console.log('numberBtn1And100: ', numberBtn1And100);

// var numberBtn1And1000000 = Math.floor(randomNumber * 1000000);
// // // console.log('numberBtn1And1000000: ', numberBtn1And1000000);

// // number of ways to generate a 2-digit binary number
// /**
//  * 0 0
//  * 0 1
//  * 1 0
//  * 1 1
//  * -- total ways = 4
//  */

// const maxNumberBtn4And5 = Math.max(4,5);
// // // console.log('maxNumberBtn4And5: ', maxNumberBtn4And5);

// const maxBtnSetNumbers = Math.max(14, 5, 0, -1, -2, -3);
// // // console.log('maxBtnSetNumbers: ', maxBtnSetNumbers);

// const minNumberBtn4And5 = Math.min(4,5);
// // // console.log('minNumberBtn4And5: ', minNumberBtn4And5);

// const minBtnSetNumbers = Math.min(-3, 10, -50, 0, 1, -2);
// // // console.log('minBtnSetNumbers: ', minBtnSetNumbers);

// // convert string to number;

// // Way1 : Preferred Way
// const string1 = '30';
// const string2 = '40';
// // console.log('string1: ', string1);
// // console.log('string2: ', string2);

// // console.log('type of string1: ', typeof(string1));
// // console.log('type of string2: ', typeof(string2));

// const stringAddn = string1 + string2; // Ouput: '3040'
// // console.log('String addition result: ', stringAddn);
// // console.log('String Addn type: ', typeof(stringAddn));

// const strAsNum1 = +string1;
// const strAsNum2 = +string2;
// const stringAsNumAddn = strAsNum1 + strAsNum2; // Output: 70

// // console.log('strAsNum1: ', strAsNum1);
// // console.log('strAsNum2: ', strAsNum2);

// // console.log('type of strAsNum1: ', typeof(strAsNum1));
// // console.log('type of strAsNum2: ', typeof(strAsNum2));
// // console.log('String as number addition result: ', stringAsNumAddn);
// // console.log('String as number Addn type: ', typeof(stringAsNumAddn));

// // Way2: convert string to number
// const str = '456';
// const strToNum = Number(str);
// // console.log('str: ', str);
// // console.log('strToNum: ', strToNum);

// const number1 = 40;
// const number2 = 50;
// // console.log('number1: ', number1);
// // console.log('number2: ', number2);

// // console.log('type of number1: ', typeof(number1));
// // console.log('type of number2: ', typeof(number2));

// const convertingNum1toStr1 = number1 + '';
// const convertingNum1toStr2 = number2 + '';
// // console.log('convertingNum1toStr1: ', convertingNum1toStr1);
// // console.log('convertingNum1toStr2: ', convertingNum1toStr2);

// // console.log('type of convertingNum1toStr1: ', typeof(convertingNum1toStr1));
// // console.log('type of convertingNum1toStr2: ', typeof(convertingNum1toStr2));
// // Way2: convert string to number (not a preferred way)
// const num = 456;
// const numToStr = String(num);
// // console.log('num: ', num);
// // console.log('numToStr: ', numToStr);

// // isNaN() (read it as 'is not a number()')
// // console.log('Is A a NaN()?', isNaN('A'));
// // console.log('Is 70 a NaN()?', isNaN(70));

// // isFinite()
// // console.log('Is 345345345345345345 finite?', isFinite(234234234234234)); // true
// // console.log('Is Infinite finite?', isFinite(Infinity)); // false
// // console.log('Value of Infinity: ', Infinity); // Infinity

// // console.log("'Phani' - 23", 'Phani' - 23);

/** 
 * DIFF BETWEEN == && === 
 * 
 * == will check the value and ignore the type
 * === will check the value AND the type
*/
const doubleEqualStr = "23";
const doubleEqualNum = 23;

console.log(
  'Are num1 & str1 equal using "==" ?: ',
  doubleEqualStr == doubleEqualNum
);
console.log(
  'Are num1 & str1 equal using "===" ?: ',
  doubleEqualStr === doubleEqualNum
);

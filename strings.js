
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
 * .split()
 * .join()
 * .splice()
 * .slice()
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
//  console.log('concat eg: Full Name: ', fullName)
 
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
 

//   Talk about == && ===
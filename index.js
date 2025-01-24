// const arr = [1, 2, 3, 4];
//    const result = arr.map((num, index, array) => array[index] * 2);
//    console.log(result);
/////////////////////////////////////////////////////////////////////////
// const arr = [10, 20, 30];
// const result = arr.map((num) => num.toString());
// console.log(result);
/////////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3];
//    const result = arr.map((num) => {
//      console.log(num);
//    });
//    console.log(result);
////////////////////////////////////////////////////////////////////////
// const arr = [10, 20, 30];
// arr.forEach(num => console.log(num * 2));
//////////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3];
//     const result = arr.forEach(num => num * 2);
//     console.log(result);
////////////////////////////////////////////////////////////////////////////
// const arr = [1, 2, 3];
// arr.forEach((num, index) => {
//   if (index === 1) return;
//   console.log(num);
// });
/////////////////////////////////////////////////////////////////////////////////
// const arr = ['a', 'b', 'c'];
// const result = arr.map((char, index) => index + char);
// console.log(result);
/////////////////////////////////////////////////////////////////////////////////
// const arr = [[1, 2], [3, 4]];
// const result = arr.map(subArr => subArr.map(num => num * 2));
// console.log(result)
/////////////////////////////////////////////////////////////////////////////////
// const arr = [
//     { id: 1, value: 10 },
//     { id: 2, value: 20 },
//   ];
//   const result = arr.map(obj => ({ ...obj, value: obj.value * 2 }));
//   console.log(result);
/////////////////////////////////////////////////////////////////////////////////
// Question 1: Extract the First Character of Each Word
// Write a JavaScript function that uses charAt to extract the first character of each word in the array ["apple", "banana", "cherry"]. What is the resulting array?
// o/p: ['a', 'b', 'c']
// function char(){
//     let a=["apple", "banana", "cherry"]
//     for(i=0;i<a.length;i++){
//         console.log(a[i][0])
//     }
// }
// char()
// let array=["apple", "banana", "cherry"]
// let a=array.map(function(a){
//     return a.charAt(0)
// })
// console.log(a)
/////////////////////////////////////////////////////////////////////////////////
// Question 2: Get Unicode Values of Last Characters
// Use charCodeAt to find the Unicode value of the last character in each word of the array ["dog", "cat", "bird"]. What does the resulting array look like?
// o/p: [103, 116, 100]
// let array=["dog","cat","bird"]
// let a=array.map(function(arr){
// return arr.charCodeAt()
// })
// console.log(a)
/////////////////////////////////////////////////////////////////////////////////
// Question 3: Shift the First Character of Each Word
// Use charCodeAt and String.fromCharCode to replace the first character of each word in ["frog", "duck", "goose"] with the next letter in the alphabet. What is the modified array?
// o/p: ['grog', 'euck', 'hoose']
// let arr=["frog", "duck", "goose"]
// let a=arr.map(function(x){
//     return String.fromCharCode(x.charCodeAt(0) + 1) + x.slice(1);
// })
// console.log(a)
///////////////////////////////////////////////////////////////////////////////////
// Question 4: Capitalize Even Unicode Characters
// Write a JavaScript program that iterates through each character of words in the array ["zebra", "lion", "tiger"]. Use charCodeAt to check if the Unicode value of a character is even, and convert such characters to uppercase. What does the transformed array look like?
// o/p: ['ZeBRa', 'LIoN', 'TIGeR']
// let arr = ["zebra", "lion", "tiger"];
// let result = arr.map(function (word) {
//   return word
//     .split("") 
//     .map(function (char) {
      
//       return char.charCodeAt(0) % 2 === 0 ? char.toUpperCase() : char;
//     })
//     .join(""); 
// });

// console.log(result);
///////////////////////////////////////////////////////////////////////////////////////
// Using charAt, reverse the characters in each word of the array ["bat", "cat", "hat"]. What is the final array after the reversal?
// o/p: ['tab', 'tac', 'tah']
// let a=["bat", "cat", "hat"]
// let b=a.map(function(num){
//     return num.split("").reverse().join("");
// })
// console.log(b)












import products from "./data.js";

// let cheapProduct = [];
// products.forEach((product) => {
//   if (product.price <= 100);
//   cheapProduct.push(product);
// });
// console.log(cheapProduct);
// N1
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {
//   return students.map((students) => {
//     if (students.percent > 85) {
//       return { name: students.name, parent: students.percent, grade: 5 };
//     } else if (students.percent <= 85 && students.percent > 70) {
//         return { name: students.name, parent: students.percent, grade: 4 };}
//         else  {
//             return { name: students.name, parent: students.percent, grade: 3 };
//   }).filter((student) => {
//     return students.grade == 5
// });
// }

// const result = getNamesByGrade(students,5)

// N2
// function countWords(arr) {
//   return arr.reduce((acc, curr) => {
//     acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//     return acc;
//   }, {});
// }

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// const result = countWords(animals);
// console.log(result);

// N3
// function squareArray(arr) {
//   return arr.map((num) => num * num);
// }

// const input = [1, 2, 3, 4, 5];
// const output = squareArray(input);
// console.log(output);

// N4
// const input = [1, -4, 14, 0, -4, 29, -15];

// const sumOfPositiveNumbers = input
//   .filter((num) => num > 0)
//   .reduce((acc, curr) => acc + curr, 0);

// console.log(sumOfPositiveNumbers);

// N5
// const input = "George Raymond Richard Martin";

// const initials = input
//   .split(" ")
//   .map((word) => word[0])
//   .join("");

// console.log(initials);

// N6
// const people = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ];

// people.sort((a, b) => b.age - a.age);

// const ageDifference = people[0].age - people[people.length - 1].age;
// console.log(ageDifference);

// N7
// function son(arr) {
//   const even = arr.filter((num) => num % 2 === 0);
//   const odd = arr.filter((num) => num % 2 !== 0);
//   return [even, odd];
// }

// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const [evenNumbers, oddNumbers] = son(input);
// console.log(evenNumbers);
// console.log(oddNumbers);

// N8
// function son(arr) {
//   return arr.reduce((son2, curr) => {
//     if (!son2.includes(curr)) {
//       son2.push(curr);
//     }
//     return son2;
//   }, []);
// }

// const input = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9];
// const result = son(input);
// console.log(result);

// N15
// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const productsWithoutId4 = products.filter((product) => product.id !== 4);
// console.log("Products without Id 4:", productsWithoutId4);

// N16
//function onlyLetters(str) {
//  return str.split("").every((char) => /[a-bA-B]/.test(char));
//}
//const input2 = "Hello123";
//console.log(onlyLetters(input1));

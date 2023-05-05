// Activity 1

// const array = ['one', 'two', 'three'];
// const arrayHtml = array.map(function (step){
//     return `<li>${step}</li>`;
// });

// document.getElementById("myList").innerHTML = arrayHtml.join(" ");

// Activity 2

// const grades = ['A', 'B', 'A'];

// function convertGrade(grade) {
//     let gpa = 0;

//     if (grade === 'A') {
//         gpa = 4;
//     }
//     else if (grade === 'B') {
//         gpa = 3;
//     }
//     return gpa;
// }

// const gpaList = grades.map(convertGrade);
// // document.getElementById("myList").innerHTML = grades.map(convertGrade);

// // Activity 3
// let finalGpa = gpaList.reduce((total, num) => total + num) /gpaList.length;

// // Activity 4
// let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// function charCounter (fruit) {
//     return fruit.length < 6;
// }

// // const finalFruit = fruits.filter(charCounter);

// const finalFruit = fruits.filter ((fruit) => fruit.length < 6);

// Activity 5

let numbers = [12, 34, 21, 54];
let luckyNumber = 21;

let doesExist = numbers.indexOf(luckyNumber);
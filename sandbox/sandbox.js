// let x = 12;
// let y = 12;
// let z = x + y;
// console.log("Sum:", z);

// x = 12;
// y = 2;
// z = x * y;
// console.log("Product:", z);

// x = 36;
// y = 6;
// z = x - y;
// console.log("Differemce:", z);

// x = 'Sunny ';
// y = 'Rubia';
// x += y;
// console.log("Concatenate:", x);

// array = {x: 1, y: 2, z: 3};
// console.log("Assigning a value: ", array.z);

// let i = 1;
// let j = ++i;
// console.log("Increment:", i);

// let a = 'Sunny';
// let b = 24;
// let c = a == b;
// console.log("Compare (if same type): ", c);

// k = i < j;
// console.log("Check if less:", k);

// let d = 24;
// let e = 48;
// let f = d != e;
// console.log("Compare (if not equal):", f);

// let g = 9;
// let h =  (g < 10 && g > 0);
// console.log("Less than 10 and greater than 0:", h);

// function getDay(day) {
//     switch (day) {
//         default:
//             return "Not a valid day.";
//             break;
//         case "Monday":
//             return "It's Monday.";
//             break;
//         case "Saturday":
//         case "Sunday":
//             return "Time to relax.";
//             break;
//     }
// }

// console.log(getDay("Friday"));



// function sampleFunction() {
//     let randomNumber = Math.random();

//     if (randomNumber > 0.5) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(sampleFunction());
// const myArray = [12, 34, 21, 54];
// const luckyNumber = 21;
// let luckyIndex = -1;
// myArray.forEach(function (item, index) {
//   if (item === luckyNumber) {
//     luckyIndex = index;
//   }
// });


// const buttonElement = document.getElementById("submitButton");

// // function copyInput() {
// //   const inputElement = document.getElementById("inputBox");
// //   const outputElement = document.getElementById("output");
// //   outputElement.innerHTML = inputElement.value;
// // }

// buttonElement.addEventListener("click", copyInput);


// //// modify the copyInput callback to receive the event object
// function copyInput(event) {
//   // take a look at the event!
//   console.log(event);
//   const inputElement = document.getElementById("inputBox");
//   const outputElement = document.getElementById("output");
//   outputElement.innerHTML = inputElement.value;
// }

// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
// }

let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
}

let aMedication = medications['Lactated Ringers'];


let aName = aMedication[0][0];
let anAmount = aMedication[1][0];
let anId = aMedication[2][0];
let anExpirationDate = aMedication[3][0];


// let medications = [  ['Lactated Ringers', '13ab7', 100, 'L', '12/30/2029'],
//   ['Levothyroxine', 'at342', 2000, 'ct', '03/18/2021'],
//   ['Rosuvastatin', 'gr5423', 1500, 'ct', '09/01/2020'],
//   ['Albuterol', 'iuy6532', 1325, 'ct', '01/01/2023'],
//   ['Esomeprazole', 'mnb78932', 23145, 'ct', '10/01/2021']
// ];


// let aName = medications[0][1];
// let anAmount = medications[1][1];
// let anId = medications[2][1];
// let anExpirationDate = medications[3][1];
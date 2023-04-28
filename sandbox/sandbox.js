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

function getDay(day) {
    switch (day) {
        default:
            return "Not a valid day.";
            break;
        case "Monday":
            return "It's Monday.";
            break;
        case "Saturday":
        case "Sunday":
            return "Time to relax.";
            break;
    }
}

console.log(getDay("Friday"));
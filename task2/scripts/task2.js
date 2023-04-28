/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const studentName = 'Camille Rubia';

// Step 2: place the value of the name variable into the HTML file 
// (hint: document.querySelector())
document.querySelector('#name').textContent = studentName

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;


// Step 5: declare and instantiate a variable to hold the name of your picture
let photoName = "Camille Rubia's photo";

// Step 6: copy your image into the "images" folder
const studentPhoto = 'images/camille.png';

// Step 7: place the value of the picture variable into the HTML file 
// (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', studentPhoto);
document.querySelector('img').setAttribute('alt', photoName);




/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favoriteFood = ['pizza', 'sushi', 'baked sushi', 'lasagna'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favoriteFood;


// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFavorite = ['carbonara', 'kimchi', 'milkshake'];

// Step 4: add the variable holding another favorite food to the favorite food array
const allFood = favoriteFood.concat(anotherFavorite);
let foodList = allFood.join(", ");

// Step 5: repeat Step 2
document.querySelector('#food').textContent = foodList;

// Step 6: remove the first element in the favorite foods array
allFood.shift();
foodList = allFood.join(", ");

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodList;

// Step 8: remove the last element in the favorite foods array
allFood.pop();
foodList = allFood.join(", ");

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodList;
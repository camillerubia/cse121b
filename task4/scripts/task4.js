/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let information = {};

// Step 2: Inside of the object, add a property named name with a value 
// of your name as a string
information.name = 'Camille Rubia';

// Step 3: Add another property named photo with a value of the image path and 
// name (used in Task 2) as a string
information.photo = 'images/camille.png';

// Step 4: Add another property named favoriteFoods with a value of an array 
// of your favorite foods as strings ( hint: [] )
information.favoriteFoods = ['lasagna', 'baked sushi', 'carbonara'];

// Step 5: Add another property named hobbies with a value of an array of
//  your hobbies as strings
information.hobbies = ['read books', 'play guitar', 'cook'];

// Step 6: Add another property named placesLived with a value of an empty array
information.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: 
// place and length and values of an empty string
let newObject = {'place': '', 'length': ''};

// Step 8: For each property, add appropriate values as strings
newObject.place = 'Cavite';
newObject.length = '25 years';
information.placesLived.push(newObject);

// Step 9: Add additional objects with the same properties for each place you've lived
let secondObject = {'place': '', 'length': ''};
secondObject.place = 'Zambales';
secondObject.length = '3 years';
information.placesLived.push(secondObject);

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to 
// the HTML <span> element with an ID of name
const studentName = document.getElementById('name');
studentName.innerText = information.name;

// Step 2: Assign the value of the photo property as the src attribute of the 
// HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('src', information.photo);

// Step 3: Assign the value of the name property as the alt attribute of the 
// HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('alt', information.name);

// Step 4: For each favorite food in the favoriteFoods property, create an
//  HTML <li> element and place its value in the <li> element
const favoriteFoods = document.getElementById('favorite-foods');
let foodValue = "";
let foodLength = information.favoriteFoods.length;

for (let i = 0; i < foodLength; i++) {
    let food = document.createElement('li');
    foodValue = information.favoriteFoods[i];

// Step 5: Append the <li> elements created above as children of the HTML <ul> 
// element with an ID of favorite-foods
    food.textContent = foodValue;
    favoriteFoods.appendChild(food);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbies = document.getElementById('hobbies');
let hobbiesValue = "";
let hobbiesLength = information.hobbies.length;

for (let i = 0; i < hobbiesLength; i++) {
    let hobby = document.createElement('li');
    hobbiesValue = information.hobbies[i];

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    hobby.textContent = hobbiesValue;
    hobbies.appendChild(hobby);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
const placesLived = document.getElementById('places-lived');
let placeLength = information.placesLived.length;

for (let i = 0; i < placeLength; i++) {
    let dtPlace = document.createElement('dt');
    let placeValue = information.placesLived[i].place;

// - Create an HTML <dd> element and put its length property in the <dd> element
    let ddLength = document.createElement('dd');
    let lengthValue = information.placesLived[i].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the 
// HTML <dl> element with an ID of places-lived
    dtPlace.textContent = placeValue;
    placesLived.appendChild(dtPlace);

    ddLength.textContent = lengthValue;
    placesLived.appendChild(ddLength);
}
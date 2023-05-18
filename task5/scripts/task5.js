/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const getDate = new Date();
console.log(getDate);

// Step 2: Declare another variable to hold the day of the week
let getDay;


// Step 3: Using the variable declared in Step 1, assign the value of the variable 
// declared in Step 2 to the day of the week ( hint: getDay() )
getDay = getDate.getDay();
// getDay = 7;
console.log(getDay);

// Step 4: Declare a variable to hold a message that will be displayed
let message;

// Step 5: Using an if statement, if the day of the week is a weekday 
// (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const currentDay = days[getDay];
// console.log(currentDay);

if (getDay > 0 && getDay != 6) {
    message = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else if (getDay == 0 || getDay == 6) {
    message = "Wohoo! It's the weekend!";
} if (getDay > 6) {
    message = "We only have Sundays to Saturdays. An eight day is non-existent."
}

console.log('First message:');
console.log(message);

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage;

// Step 2: Use switch, case and break to set the message variable to the day of the week 
// as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in 
// Step 2 above
function dayOfWeek(day, days) {
    let currentDay ="";
    switch (day) {
        case 0:
            currentDay = days[0];
            break;
        case 1:
            currentDay = days[1];
            break;
        case 2:
            currentDay = days[2];
            break;
        case 3:
            currentDay = days[3];
            break;
        case 4:
            currentDay = days[4];
            break;        
        case 5:
            currentDay = days[5];
            break;        
        case 6:
            currentDay = days[6];
            break;
        default:
            currentDay = "No such day";

    }
    return currentDay;
}

anotherMessage = dayOfWeek(getDay, days);
console.log(anotherMessage);

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an 
// ID of message1
let firstMessage = document.getElementById('message1');
firstMessage.innerText = message;


// Step 2: Assign the value of the second message variable to the HTML element with an 
// ID of message2
let secondMessage = document.getElementById('message2');
secondMessage.innerText = anotherMessage;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
var templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array 
// argument and does the following for each temple:
function output (list) {

    // - Creates an HTML <article> element
    let article = document.createElement('article');

    // - Creates an HTML <h3> element and add the temple's templeName property to it
    let name = document.createElement('h3');
    temples.templeName = "";
    name.textContent = temples.templeName;

    // - Creates an HTML <h4> element and add the temple's location property to it
    let location = document.createElement('h4');
    temples.templeLocation = "";
    location.textContent = temples.templeLocation;

    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    let dedication = document.createElement('h4');
    temples.templeDedication = "";
    dedication.textContent = temples.templeDedication;

    // - Creates an HTML <img> element and add the temple's imageUrl property to the src 
    // attribute and the temple's templeName property to the alt attribute
    let templeImg = document.createElement('img');
    temples.templeUrl = "";
    templeImg.setAttribute('src', temples.templeUrl);
    templeImg.setAttribute('alt', temples.templeName);

    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> 
    // element as children
    article.appendChild(name);
    article.appendChild(location);
    article.appendChild(dedication);

    // - Appends the <article> element to the HTML element with an ID of temples
    let templeElement = document.getElementById('temples');
    templeElement.append(article);

    console.log("Output - Working");
}
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {

    // Step 4: In the function, using the built-in fetch method, call this absolute 
    // URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. 
    // Create a variable to hold the response from your fetch. You should have the program 
    // wait on this line until it finishes.
    let response = await fetch ('https://byui-cse.github.io/cse121b-course/week05/temples.json');

// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). 
    let data = await response.json();

// Store this in the templeList variable you declared earlier (Step 1). Make sure the 
// the execution of the code waits here as well until it finishes.
    if (data.ok) {
        templeList = data;
    }
    console.log('Get Temples - Working')
}
// Step 6: Finally, call the output function and pass it the list of temples. 
output(templeList);

// Execute your getTemples function to make sure it works correctly.
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements 
// from the HTML element with an ID of temples
function reset() {
    let article = document.getElementById('temples');
    article.innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {

// - Calls the reset function
    reset();

// - Sorts the global temple list by the currently selected value of the HTML element 
// with an ID of sortBy
    let sortValue = document.getElementById('sortBy').value;

    function sorter(x, y) {
        if (sortValue == 'templeNameAscending') {
            if (x.name < y.name) {
                return -1;
            }
            if (x.name > y.name) {
                return 1;
            }
            return 0;
        } else if (sortValue == 'templeNameDescending') {
            if (x.name < y.name) {
                return 1;
            }
            if (x.name > y.name) {
                return -1;
            }
            return 0;
        }
    }
    
    
// - Calls the output function passing in the sorted list of temples
    let sortedList = templeList.sort(sorter);
    output(sortedList);
}
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that 
// calls the sortBy function
document.querySelector('#sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

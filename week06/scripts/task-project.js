// Ensures the functions to run when the website has already loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Created a list for subject, verb and objects
    const subjects = ['The cat', 'My friend', 'The car', 'A dog'];
    const verbs = ['ate', 'jumped over', 'slept on', 'ran towards'];
    const objects = ['the table', 'the park', 'the house', 'the beach'];

    // store buttons and the container for displaying the words by subject, verb and object
    const dispButton = document.querySelector('.btn-generate');
    const dispSubject = document.querySelector('.subject-text');
    const dispVerb = document.querySelector('.verb-text');
    const dispObject = document.querySelector('.object-text');
    const addWords = document.querySelector('.btn-add');
    const btnView = document.querySelector('.btn-view');

    // created a variable for input fields
    const inputSubject = document.getElementById('subject');
    const inputVerb = document.getElementById('verb');
    const inputObject = document.getElementById('object');

    // Event listener for Generating the words to the html
    dispButton.addEventListener('click', () => {
        const randomSubject = generateRandomSubject();
        const randomVerb = generateRandomVerb();
        const randomObject = generateRandomObject();
        
        // Displays the random word in the container
        dispSubject.textContent = randomSubject;
        dispVerb.textContent = randomVerb;
        dispObject.textContent = randomObject;
        fadeIn();
    });

    // Event listener for add button to get all the input fields value and adding it 
    // on the array
    addWords.addEventListener('click', () => {
        subjects.push(inputSubject.value);
        verbs.push(inputVerb.value);
        objects.push(inputObject.value);

        displayAddedWord();

        // Clears the input field when button is clicked.
        inputSubject.value = "";
        inputVerb.value = "";
        inputObject.value = "";
        
    });

    // Event listener for view button to display the list of words from array and 
    // displaying it on the front end
    btnView.addEventListener('click', () => {
        // resets the list so it won't show double list
        document.querySelector(".subject-list").innerHTML = "";
        document.querySelector(".verb-list").innerHTML = "";
        document.querySelector(".object-list").innerHTML = "";

        // Goes through the array then creates an element to add the value one by 
        // one and display
        subjects.forEach(function(subject){
            var span = document.createElement('span');
            span.innerHTML = subject;
            document.querySelector(".subject-list").appendChild(span);
        });
        // Goes through the array then creates an element to add the value one by 
        // one and display
        verbs.forEach(function(verb){
            var span = document.createElement('span');
            span.innerHTML = verb;
            document.querySelector(".verb-list").appendChild(span);
        });
        // Goes through the array then creates an element to add the value one by 
        // one and display
        objects.forEach(function(object){
            var span = document.createElement('span');
            span.innerHTML = object;
            document.querySelector(".object-list").appendChild(span);
        });
    });


    // display the value of the input fields and displaying it on the front end
    function displayAddedWord() {
        document.getElementById("addedWords").innerHTML = "";
        const wordList = document.querySelectorAll('.input-fields-wrapper input');
        wordList.forEach(function(word){
            var span = document.createElement("span");
            span.innerHTML = word.value + " ";
            document.getElementById("addedWords").appendChild(span);
        });
        
        
    }

    // Functions to generate random words to create a sentence.
    function generateRandomSubject() {
        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

        return randomSubject;
    }
    function generateRandomVerb() {
        const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

        return randomVerb;
    }
    function generateRandomObject() {
        const randomObject = objects[Math.floor(Math.random() * objects.length)];

        return randomObject;
    }

    // This function will set the opacity of the generated words
    function fadeIn(){
        // Counters for opacity in each category.
        var op1 = 0;
        var op2 = 0;
        var op3 = 0;

        // Avoids spamming the generate button
        dispButton.disabled = true;

        // Timers for displaying each word after another.
        // but will stop if opacity has reached 1.
        var timer = setInterval(function () {
            if (op1 <= 1){
                dispSubject.style.opacity = op1;
                op1 += 0.1;
            }
            else{
                clearInterval(timer);
            }
        }, 50);

        var timer1 = setInterval(function () {
            if (op2 <= 1){
                dispVerb.style.opacity = op2;
                op2 += 0.1;
            }
            else{
                clearInterval(timer1);
            }
        }, 200);

        var timer2 = setInterval(function () {
            if (op3 <= 1){
                dispObject.style.opacity = op3;
                op3 += 0.1;
            }
            else{
                clearInterval(timer2);
                dispButton.disabled = false;
            }
        }, 250);
    }
});
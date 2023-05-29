// Ensures the functions will run after the HTML has already loaded.
document.addEventListener("DOMContentLoaded", () => {

    // Created a list for subject, verb and objects
    const subjects = ['My sandwich', 'Your pet', 'The plane', 'A duck', 'The little girl', 'A painting'];
    const verbs = ['ate', 'climbed over', 'slept on', 'ran towards', 'laughed at', 'looked at'];
    const objects = ['our fence', 'the park', 'the bowl', 'the beach', 'a comb', 'your picture'];

    // store buttons and the container in variables that displays the words 
    // by subject, verb and object for local usage
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

    // Click event listener for generate button for generating the words to the html
    dispButton.addEventListener('click', () => {
        const randomSubject = generateRandomSubject();
        const randomVerb = generateRandomVerb();
        const randomObject = generateRandomObject();
        
        // Displays the random word in the container
        dispSubject.textContent = randomSubject;
        dispVerb.textContent = randomVerb;
        dispObject.textContent = randomObject;

        // Calls the function for display effect/animation
        fadeIn();
    });

    // Event listener for ADD button to get all the input fields value and adding it 
    // on the array
    addWords.addEventListener('click', () => {
        subjects.push(inputSubject.value);
        verbs.push(inputVerb.value);
        objects.push(inputObject.value);

        // Calls the function to display the words from input container beside the Added Words:
        displayAddedWord();

        // Clears the input field when button is clicked.
        inputSubject.value = "";
        inputVerb.value = "";
        inputObject.value = "";
    });

    // Event listener for VIEW button to display the list of words from array and 
    // display it at the bottom
    btnView.addEventListener('click', () => {
        // resets the list container so it won't repeat twice
        document.querySelector(".subject-list").innerHTML = "";
        document.querySelector(".verb-list").innerHTML = "";
        document.querySelector(".object-list").innerHTML = "";

        // Foreach loops in every category that goes through the array, creates an element 
        // to add the value one by one and replace the HTML by category
        subjects.forEach(function(subject){
            var span = document.createElement('span');
            span.innerHTML = subject;
            document.querySelector(".subject-list").appendChild(span);
        })
        verbs.forEach(function(verb){
            var span = document.createElement('span');
            span.innerHTML = verb;
            document.querySelector(".verb-list").appendChild(span);
        });
        objects.forEach(function(object){
            var span = document.createElement('span');
            span.innerHTML = object;
            document.querySelector(".object-list").appendChild(span);
        });
    });


    // display the value of the input fields and display it
    function displayAddedWord() {
        document.getElementById("addedWords").innerHTML = "";
        
        // Selects all input element from the input field container 
        const wordList = document.querySelectorAll('.input-fields-wrapper input');

        // Loops through the list so each input will create a span and add value to
        // append in the addedWords container
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
    
        // resets the opacity to 0 as user clicks the Generate button
        dispSubject.style.opacity = 0;
        dispVerb.style.opacity = 0;
        dispObject.style.opacity = 0;

        // Counters for opacity in each category.
        var op1 = 0;
        var op2 = 0;
        var op3 = 0;

        // Prevents the user from spamming the generate button
        dispButton.disabled = true;

        // Timers for displaying each word after another.
        // but will stop if opacity counter has reached 1.
        var timer = setInterval(function () {
            if (op1 <= 1){
                dispSubject.style.opacity = op1;
                op1 += 0.1;
            }
            else{
                var timer1 = setInterval(function () {
                    if (op2 <= 1){
                        dispVerb.style.opacity = op2;
                        op2 += 0.1;
                    }
                    else{
                        var timer2 = setInterval(function () {
                            if (op3 <= 1){
                                dispObject.style.opacity = op3;
                                op3 += 0.1;
                            }
                            else{
                                dispButton.disabled = false;
                                clearInterval(timer2);
                            }
                        }, 100);
                        clearInterval(timer1);
                    }
                }, 100);
                clearInterval(timer);
            }
        }, 100);        
    }
});
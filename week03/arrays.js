// Activity 1

const array = ['one', 'two', 'three'];
const arrayHtml = array.map(function (step){
    return `<li>${step}</li>`;
});

document.getElementById("myList").innerHTML = arrayHtml.join(" ");

// Activity 2

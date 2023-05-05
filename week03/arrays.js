// Activity 1

// const array = ['one', 'two', 'three'];
// const arrayHtml = array.map(function (step){
//     return `<li>${step}</li>`;
// });

// document.getElementById("myList").innerHTML = arrayHtml.join(" ");

// Activity 2

const grades = ['A', 'B', 'A'];

function convertGrade(grade) {
    let gpa = 0;

    if (grade === 'A') {
        gpa = 4;
    }
    else if (grade === 'B') {
        gpa = 3;
    }
    return gpa;
}

const gpaList = grades.map(convertGrade);
// document.getElementById("myList").innerHTML = grades.map(convertGrade);

// Activity 3
let finalGpa = gpaList.reduce((total, num) => total + num) /gpaList.length;


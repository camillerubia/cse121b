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
        gpa = 2;
    }
    return gpa;
}
// document.getElementById("myList").innerHTML = grades.map(convertGrade);
const finalGpa = grades.map(convertGrade);
const steps = ["one", "two", "three"];
const grades = ['A', 'B', 'A'];


function listTemplate(step) {
  return `<li>${step}</li>`
}

function convertToGpa(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    } else if (grade === 'C') {
        points = 2;
    } else if (grade === 'D') {
        points = 1;
    } else {
        points = 0;
    }
    return points;
}

// I am on part 4 of the ponder activity
// function getGpaPoints(list) {
    
// }


let newArray = steps.map(listTemplate);
let gpaList = grades.map(convertToGpa);
const formattedList = newArray.join('');


console.log(gpaList);
console.log(formattedList);
const stepsHtml = // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = formattedList;
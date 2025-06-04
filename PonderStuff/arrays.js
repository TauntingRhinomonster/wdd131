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


let newArray = steps.map(listTemplate);
let gpaList = grades.map(convertToGpa);
const formattedList = newArray.join('');
// Reduce
const reduced = gpaList.reduce((total, item) => total + item);
const gpa = reduced / gpaList.length;
// Filter
let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruit = fruit.filter(fruit => fruit.length < 6);
// indedOf
const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let index = numbers.indexOf(luckNumber);


const stepsHtml = // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = formattedList;


// displaying data on the console
console.log(gpaList);
console.log(formattedList);
console.log(gpa);
console.log(`Unfiltered: ${fruit}`);
console.log(`Filtered: ${filteredFruit}`);
console.log(`This is my list of numbers: ${numbers}`);
console.log(`My lucky number is ${luckNumber}`);
console.log(`The lucky number 21 was found at index: ${index}`);
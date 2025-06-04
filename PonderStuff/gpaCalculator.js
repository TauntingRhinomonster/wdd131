// Declaring the variables that I will be using
const button = document.querySelector('#submitButton');
const outputParagraphElement = document.querySelector('#output');


// Functions
function getValueOfInputIntoArray(callback) {
    const input = document.querySelector('#grades');
    let usersInput = input.value;
    console.log(usersInput);
    const array = usersInput.split(',');
    const newArray = array.map(letter => letter.trim().toUpperCase());
    console.log(`This is my new Array: ${newArray}`);
    // Hold on a sec! Let me calculate what each letter grade is!
    callback(newArray);
}

function calculateGpa(array) {
    let total = 0;
    let count = 0;

    array.forEach(letter => {
        let points = 0;
        if (letter === 'A') points = 4;
        else if(letter === 'B') points = 3;
        else if(letter === 'C') points = 2;
        else if(letter === 'D') points = 1;
        else points = 0;

        total += points;
        count++;
    });

    const gpa = total / count;
    console.log(`GPA: ${gpa.toFixed(2)}`);
    outputParagraphElement.textContent += `GPA: ${gpa.toFixed(2)}`;
}




// Event Listeners
button.addEventListener('click', function() {
  getValueOfInputIntoArray(calculateGpa);
});

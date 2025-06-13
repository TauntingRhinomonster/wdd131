const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
                { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
    enrollStudent: function(sectionNumber) {
        const index = this.sections.findIndex(section => section.sectionNum === sectionNumber);
        if (index !== -1) {
            this.sections[index].enrolled += 1;
            outputSections(this);
        }
    },
    dropStudent: function(sectionNumber) {
        const index = this.sections.findIndex(section => section.sectionNum === sectionNumber);
        if (index !== -1) {
            this.sections[index].enrolled -= 1;
            outputSections(this);
        }
    }
};

function setCourse(course) {
    const name = course.name;
    const number = course.code;
    courseName.textContent = name;
    courseCode.textContent = number;
}

function outputSections(course) {
    sectionNumber.innerHTML = '';
    const sections = course.sections; // This is an array
    // I need to create the html for each section using the table tags in html
    // Next I need to make it able to print each section into the table.
    sections.forEach(section => {
        const row = document.createElement('tr'); //create the row
        // Section number
        const sectionNum = document.createElement('td');
        sectionNum.textContent = section.sectionNum;
        row.appendChild(sectionNum);
        // Room number
        const roomNum = document.createElement('td');
        roomNum.textContent = section.roomNum;
        row.appendChild(roomNum);
        // Enrolled Students
        const enrolled = document.createElement('td');
        enrolled.textContent = section.enrolled;
        row.appendChild(enrolled);
        // Days of the week
        const days = document.createElement('td');
        days.textContent = section.days;
        row.appendChild(days);
        // Instructor
        const instructor = document.createElement('td');
        instructor.textContent = section.instructor;
        row.appendChild(instructor);

        // Add the row to the tBody element with the ID of sections
        sectionNumber.appendChild(row);
    });
}

// Setting the variables for the HTML Elements
const courseName = document.querySelector('#courseName');
const courseCode = document.querySelector('#courseCode');
const sectionNumber = document.querySelector('#sections'); // This is the table at the bottom of courses.html
const enrollStudentBtn = document.querySelector('#enrollStudent');
const dropStudentBtn = document.querySelector('#dropStudent');
const userInput = document.querySelector('#sectionNumber');

setCourse(aCourse);
outputSections(aCourse);

enrollStudentBtn.addEventListener('click', () => {
  aCourse.enrollStudent(Number(userInput.value));
});
dropStudentBtn.addEventListener('click', () => {
  aCourse.dropStudent(Number(userInput.value));
});

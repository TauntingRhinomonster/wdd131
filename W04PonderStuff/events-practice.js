// Variables
const inputField = document.querySelector('#todo');
const submitBtn = document.querySelector('#submitTask');
const todoListElement = document.querySelector('#todoList');
const userInput = document.getElementById('todo');



// Functions
function newTask() {
    // get the list element from the DOM
    // get the value entered into the #todo input
    // render out the list 
    let todoItem = userInput.value;
    console.log(todoItem);

    todoListElement.innerHTML += `
        <li> ${todoItem}
        <div>
            <span data-function="delete" tabindex="0" aria-label="Delete task">❎</span>
            <span data-function="complete" tabindex="0" aria-label="Complete task">✅</span>
        </div>
        </li>`;

    userInput.value = '';
}

// In this function the 'e' is the reference element that was clicked on. 
function manageTasks(e) {
  // using the event find the li element closest to what they clicked
  const parent = e.target.closest("li");
    // did they click the delete or complete icon?
    if (e.target.getAttribute('data-function') === "delete") {
      parent.remove();
    }
    if (e.target.getAttribute('data-function') === "complete") {
    parent.classList.toggle('strike');
    }
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.


submitBtn.addEventListener('click', newTask);
todoListElement.addEventListener('click', manageTasks)

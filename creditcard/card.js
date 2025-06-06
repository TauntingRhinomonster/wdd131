// ||| Functions
function isCardNumberValid(number) {
	// normally we would contact a credit card service...but we don't know how to do that yet. So to keep things simple we will only accept one number
	return number === '1234123412341234'
}
function checkIsFuture(inputMonth, inputYear) {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    if (inputYear > year || (inputYear === year && inputMonth > month)) {
        return true
    }
    else {
        return false
    }
}
function displayError(msg) {
	// display error message
	document.querySelector('.errorMsg').innerHTML = msg
}
function submitHandler(event) {
    const monthInput = Number(form['Month'].value);
    const yearInput = Number(form['Year'].value);
	event.preventDefault();
	let errorMsg = '';
	console.log(this.cardNumber.value)
	// clear any previous errors
	displayError('');
	// check credit card number
	if (isNaN(this.cardNumber.value)) {
		// it is not a valid number
		errorMsg += 'Card number is not a valid number\n'
	} else if (!isCardNumberValid(this.cardNumber.value)) {
		// it is a number, but is it valid?
		errorMsg += 'Card number is not a valid card number\n';
	}
    if (!checkIsFuture(monthInput, yearInput)) {
        errorMsg += 'The current date you entered is invalid\n';
    }
	if (errorMsg !== '') {
		// there was an error. stop the form and display the errors.
		displayError(errorMsg);
		return false
	}
	return true
}

// ||| Variables
const form = document.querySelector('#credit-card-form');


// ||| Event Listeners
form.addEventListener('submit', submitHandler);
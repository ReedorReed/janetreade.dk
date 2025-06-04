//Form validation
const form = document.querySelector('#form');
const forNavn = document.querySelector('#fornavn');
const efterNavn = document.querySelector('#efternavn');
const phoneNr = document.querySelector('#tlf');
const email = document.querySelector('#email');
const dateTime = document.querySelector('#date-time');
const formMessage = document.querySelector('#form-besked');
const myBtn = document.querySelector('#submit-btn');
const checkCircle = document.querySelectorAll('.check-circle');

form.addEventListener('input', formInput);

function formInput(event) {
	let inputTarget = event.target;

	// First name validation
	if (inputTarget.id === 'fornavn') {
		let firstNameValue = inputTarget.value;
		if (validateFirstName(firstNameValue)) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[0].classList.add('fa-regular');
			checkCircle[0].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[0].classList.remove('fa-regular');
			checkCircle[0].classList.remove('fa-circle-check');
		}
	}

	// Last name validation
	if (inputTarget.id === 'efternavn') {
		let lastNameValue = inputTarget.value;
		if (validateLastName(lastNameValue)) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[1].classList.add('fa-regular');
			checkCircle[1].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[1].classList.remove('fa-regular');
			checkCircle[1].classList.remove('fa-circle-check');
		}
	}

	// Telephone validation
	if (inputTarget.id === 'tlf') {
		let isPhoneTrue = validatePhone(phoneNr.value);
		if (isPhoneTrue) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[2].classList.add('fa-regular');
			checkCircle[2].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[2].classList.remove('fa-regular');
			checkCircle[2].classList.remove('fa-circle-check');
		}
	}
	// Email validation
	if (inputTarget.id === 'email') {
		let isEmailTrue = validateEmail(email.value);
		if (isEmailTrue) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[3].classList.add('fa-regular');
			checkCircle[3].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[3].classList.remove('fa-regular');
			checkCircle[3].classList.remove('fa-circle-check');
		}
	}

	// DateTime validation
	if (inputTarget.id === 'date-time') {
		let isDateTimeValid = validateDateTime(dateTime.value);
		if (isDateTimeValid) {
			inputTarget.classList.add('ok');
			inputTarget.classList.remove('error');
			checkCircle[4].classList.add('fa-regular');
			checkCircle[4].classList.add('fa-circle-check');
		} else {
			inputTarget.classList.add('error');
			inputTarget.classList.remove('ok');
			checkCircle[4].classList.remove('fa-regular');
			checkCircle[4].classList.remove('fa-circle-check');
		}
	}
}

//Validate first name function
function validateFirstName(forNavn) {
	return forNavn.length > 1 ? true : false;
}

//Validate last name function
function validateLastName(efterNavn) {
	return efterNavn.length > 1 ? true : false;
}

//Validate phone function
function validatePhone(phoneNr) {
	return /^(\+?\d{8,15})$/.test(phoneNr);
}

//Validate email function
function validateEmail(email) {
	if (!email.includes('@') || !email.includes('.')) return false;
	const snabelIndex = email.indexOf('@');
	const dotIndex = email.lastIndexOf('.');
	if (snabelIndex < 1) return false;
	if (dotIndex < snabelIndex + 2) return false;
	if (dotIndex === email.length - 1) return false;
	return true;
}

//Validate datetime-local function
function validateDateTime(dateTimeValue) {
	// Check if value is not empty
	if (!dateTimeValue) {
		return false;
	}

	// Create object from datetime-local value
	const selectedDate = new Date(dateTimeValue);
	const currentDate = new Date();

	// Check if date is valid
	if (isNaN(selectedDate.getTime())) {
		return false;
	}

	// Check if date is in future
	if (selectedDate <= currentDate) {
		return false;
	}

	// Check if the date is to long in future
	const twoYearsFromNow = new Date();
	twoYearsFromNow.setFullYear(currentDate.getFullYear() + 2);

	if (selectedDate > twoYearsFromNow) {
		return false;
	}

	// Check business hours
	const selectedHour = selectedDate.getHours();
	if (selectedHour < 9 || selectedHour >= 16) {
		return false;
	}

	// Check for weekend (0 = Sunday, 6 = Saturday)
	const dayOfWeek = selectedDate.getDay();
	if (dayOfWeek === 0 || dayOfWeek === 6) {
		return false;
	}

	return true;
}

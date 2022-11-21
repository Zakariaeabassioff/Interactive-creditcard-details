const fullName = document.getElementById('name');
const number = document.getElementById('number');
const month = document.getElementById('month');
const year = document.getElementById('year');
const cvc = document.getElementById('cvc');

const cardfullName = document.getElementById('name-holder');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('expmonth');
const cardYear = document.getElementById('expyear');
const cardCvc = document.getElementById('cvc-number');

fullName.oninput = () => {
    if (fullName.value.length <= 20) {
        cardfullName.innerHTML = fullName.value;
    }
}

number.oninput = () => {
    if (number.value.length < 17) {
        cardNumber.innerHTML = number.value;
    } 
}

month.oninput = () => {
    if (month.value.length < 3) {
        cardMonth.innerHTML = month.value;
    }
}

year.oninput = () => {
    if (year.value.length < 5) {
        cardYear.innerHTML = year.value;
    }
}

cvc.oninput = () => {
    if (cvc.value.length < 4) {
        cardCvc.innerHTML = cvc.value;
    }
}

/* form validation */

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

const form = document.getElementById('form');
const name_error = document.getElementById('name-error');
const number_error = document.getElementById('number-error');
const exp_error = document.getElementById('exp-error');
const cvc_error = document.getElementById('cvc-error');

form.addEventListener('submit', (e) => {
    if (fullName.value === '' || fullName.value === null) {
        e.preventDefault();
        name_error.innerHTML = "Can't be blank";
        fullName.classList.add('error-border');
    } else {
        name_error.innerHTML = "";
        fullName.classList.remove('error-border');
    }
    
    if (number.value === '' || number.value === null) {
        e.preventDefault();
        number_error.innerHTML = "Can't be blank";
        number.classList.add('error-border');
    } else if (number.value.length !== 16 || !isNumber(number.value)) {
        e.preventDefault();
        number_error.innerHTML = "Wrong format";
        number.classList.add('error-border');
    } else {
        number_error.innerHTML = "";
        number.classList.remove('error-border');
    }

    if(month.value === '' || month.value === null || year.value === '' || year.value === null) {
        e.preventDefault();
        exp_error.innerHTML = "Can't be blank";
        month.classList.add('error-border');
        year.classList.add('error-border');
    } else if (month.value > 12 || month.value < 1 || !isNumber(month.value) || 
    year.value > 2022 || year.value < 2010 || !isNumber(year.value)) {
        e.preventDefault();
        exp_error.innerHTML = "Wrong format";
        month.classList.add('error-border');
        year.classList.add('error-border');
    } else {
        exp_error.innerHTML = "";
        month.classList.remove('error-border');
        year.classList.remove('error-border');
    }

    if (cvc.value === '' || cvc.value === null) {
        e.preventDefault();
        cvc_error.innerHTML = "Can't be blank";
        cvc.classList.add('error-border');
    } else if (cvc.value.length != 3 || !isNumber(cvc.value)) {
        e.preventDefault();
        cvc_error.innerHTML = "Wrong format";
        cvc.classList.add('error-border');
    } else {
        cvc_error.innerHTML = "";
        cvc.classList.remove('error-border');
    }
    
});


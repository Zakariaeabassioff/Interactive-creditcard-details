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
    cardfullName.innerHTML = fullName.value;
}

number.oninput = () => {
    cardNumber.innerHTML = number.value;
}

month.oninput = () => {
    cardMonth.innerHTML = month.value;
}

year.oninput = () => {
    cardYear.innerHTML = year.value;
}

cvc.oninput = () => {
    cardCvc.innerHTML = cvc.value;
}
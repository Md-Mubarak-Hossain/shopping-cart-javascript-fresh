// console.log('utility.js');


function inputTextField(isIncrease, elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const number = parseInt(inputFieldString);
    let newNumber;
    if (isIncrease === true) {

        newNumber = number + 1;
    }
    else {
        newNumber = number - 1;

    }
    inputField.value = newNumber;
    return newNumber;
}
function setMobileCasePrice(elementId) {
    const number = inputTextField(elementId, 'input-case-field');
    const textField = document.getElementById('case-price');
    const totalPrice = 59 * number;
    textField.innerText = totalPrice;
    return totalPrice;
}
function setMobilePrice(elementId) {
    const number = inputTextField(elementId, 'input-phone-field');
    const priceField = document.getElementById('mobile-price');
    const totalPrice = 1259 * number;
    priceField.innerText = totalPrice;
    return totalPrice;
}
// order maintain
function subTotalPrice() {
    const subTotalField = document.getElementById('subTotal');
    const priceField = document.getElementById('mobile-price');
    const textField = document.getElementById('case-price');
    const subTotal = parseFloat(priceField.innerText) + parseFloat(textField.innerText);
    subTotalField.innerText = subTotal;
    return subTotal;

}
function tax() {
    const taxCount = subTotalPrice() * .05;
    const taxField = document.getElementById('tax');
    taxField.innerText = taxCount;
    return taxCount;
}
function total() {
    const totalAmount = subTotalPrice() + tax();
    const totalField = document.getElementById('Total');
    totalField.innerText = totalAmount;
}


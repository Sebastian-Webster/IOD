function sayText(text) {
    alert(text);
}

function changeTextOfButton() {
    document.getElementById('changeTextButton').innerHTML = document.getElementById('changeTextButton').innerHTML == 'Click me to change the text!' ? 'I am a cool button! Click me again!' : 'Click me to change the text!';
}

function doAddition() {
    const number1 = prompt('Enter the first number to add.')
    const number2 = prompt('Enter the second number to add.')
    document.getElementById('additionResult').innerHTML = number1 + ' + ' + number2 + ' = ' + (parseInt(number1) + parseInt(number2));
}
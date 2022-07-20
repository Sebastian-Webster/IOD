function calculate(symbol) {
    const numberOneInput = document.querySelector('input[name="numberOne"]');
    const numberTwoInput = document.querySelector('input[name="numberTwo"]');

    const numberOne = parseFloat(numberOneInput.value);
    const numberTwo = parseFloat(numberTwoInput.value);

    if (isNaN(numberOne)) {
        alert('Please enter a number in the number one box')
        return
    }

    if (isNaN(numberTwo)) {
        alert('Please enter a number in the number two box')
        return
    }

    let result;

    function clearInput() {
        numberOneInput.value = undefined;
        numberTwoInput.value = undefined;
        numberOneInput.focus();
    }

    switch(symbol) {
        case '+':
            result = numberOne + numberTwo
            clearInput()
            break;
        case '-':
            result = numberOne - numberTwo
            clearInput()
            break;
        case 'x':
            result = numberOne * numberTwo
            clearInput()
            break;
        case '/':
            result = numberOne / numberTwo
            clearInput()
            break;
        default:
            result = 'An error occured.'
    }

    document.getElementById('result').textContent = result
}
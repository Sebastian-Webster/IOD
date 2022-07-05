function sayText(text) {
    alert(text);
}

function changeTextOfButton() {
    document.getElementById('changeTextButton').innerHTML = document.getElementById('changeTextButton').innerHTML == 'Click me to change the text!' ? 'I am a cool button! Click me again!' : 'Click me to change the text!';
}
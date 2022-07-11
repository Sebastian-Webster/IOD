function submitForm(e) {
    e.preventDefault();

    var form = document.getElementById('inputForm');

    if (parseInt(form.UserName.value) != NaN) {
        alert('Username cannot contain any numbers');
        return;
    } 
    if (form.UserName.value.length < 2) {
        alert('Your name must be longer than 2 characters.');
        return;
    } 
    if (form.UserName.value.length > 20) {
        alert('Your name must be shorter than 20 characters.');
        return;
    } 
    if (parseInt(form.deptt.value) == NaN) {
        alert('Department cannot contain any numbers');
        return;
    } 
    if (form.deptt.value.length < 2) {
        alert('Your department must be longer than 2 characters.');
        return;
    } 
    if (form.deptt.value.length > 20) {
        alert('Your department must be shorter than 20 characters.');
        return;
    } 
    
    alert('Form submitted successfully!');
}

document.getElementById('inputForm').addEventListener('submit', submitForm);
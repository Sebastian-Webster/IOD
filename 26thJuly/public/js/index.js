fetch('/calculator/add?num_1=10&num_2=20').then(response => response.json())
.then(result => {
    document.getElementById('additionResult').textContent = 'Addition Result: ' + result.result;
})
.catch(error => alert(error))

fetch('/calculator/subtract?num_1=10&num_2=20').then(response => response.json())
.then(result => {
    document.getElementById('subtractionResult').textContent = 'Subtraction Result: ' + result.result;
})
.catch(error => alert(error))

fetch('/calculator/multiply?num_1=10&num_2=20').then(response => response.json())
.then(result => {
    document.getElementById('multiplyResult').textContent = 'Multiplication Result: ' + result.result;
})
.catch(error => alert(error))

fetch('/calculator/divide?num_1=10&num_2=20').then(response => response.json())
.then(result => {
    document.getElementById('divisionResult').textContent = 'Division Result: ' + result.result;
})

fetch('/calculatorV2/exponentation?num1=10&num2=20').then(response => response.json())
.then(result => {
    document.getElementById('exponentationResult').textContent = 'Exponentation Result: ' + result.result;
})
.catch(error => alert(error))
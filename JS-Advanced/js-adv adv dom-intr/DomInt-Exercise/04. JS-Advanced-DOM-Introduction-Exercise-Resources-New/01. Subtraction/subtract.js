function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);

    let resultArea = document.getElementById('result');

    resultArea.textContent = firstNum - secondNum;
}
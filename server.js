// Simple Calculator JavaScript

// Get the display element
let display = document.getElementById('display');

// Variables to store our numbers and operation
let firstNumber = '';
let secondNumber = '';
let operation = '';

// Function to append a number to the display
function appendNumber(num) {
    if (operation === '') {
        firstNumber += num;
        display.value = firstNumber;
    } else {
        secondNumber += num;
        display.value = secondNumber;
    }
}

// Function to set the operation
function setOperation(op) {
    operation = op;
    display.value = '';
}

// ✅ Function to clear the display
function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operation = '';
    display.value = '';
}

// ✅ Function to calculate the result
function calculate() {
    let result;
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                display.value = 'Div by 0';
                return;
            }
            result = num1 / num2;
            break;
        default:
            display.value = 'Invalid op';
            return;
    }

    display.value = result;
    firstNumber = result.toString();
    secondNumber = '';
    operation = '';
}

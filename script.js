// Yenu and Yabu Work On the logic of the calculator here
var display = document.getElementById('display');
var operand1 = 0;
var operand2 = null;
var operator = null;

function inputNumber(num) {
    if (display.value === '0' || display.value === '') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function inputDecimal() {
    if (display.value.indexOf('.') === -1) {
        display.value += '.';
    }
}

function clearDisplay() {
    display.value = '';
    operand1 = 0;
    operand2 = null;
    operator = null;
}

function add() {
    operand1 = display.value;
    operator = '+';
    display.value = '';
}
function subtract() {
    operand1 = display.value;
    operator = '-';
    display.value = '';
}

function multiply() {
    operand1 = display.value;
    operator = '*';
    display.value = '';
}

function divide() {
    operand1 = display.value;
    operator = '/';
    display.value = '';
}

function calculate() {
    operand2 = display.value;
    var result;
    try {
        result = eval(operand1 + operator + operand2);
        if (operator === '/' && operand2 === '0') {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (e) {
        display.value = 'Error';
    }
}

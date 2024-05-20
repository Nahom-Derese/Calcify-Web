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

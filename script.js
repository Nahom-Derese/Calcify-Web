var display = document.getElementById('display');

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
}

function inputOperator(op) {
    
display.value += op;
}

function calculate() {
    try {
        
    var result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Error';
    }
}

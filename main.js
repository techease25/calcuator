var display = document.getElementById('display');
var buttons = document.querySelectorAll('button');

// Create the assign key function
function assignKey (input) {
    // switch
    switch (input) {
        case '=':
            calculate();
            break;
        case 'clear':
            clearDisplay();
            break;
        case 'delete':
            deleteLastChar();
            break;
        default:
            appendToDisplay(input);
            break;
    }
}

// append Function
function appendToDisplay (input) {
    display.value += input;
}
// clear diplay function
function clearDisplay () {
    display.value = '';
}
// delete last character in diplay function
function deleteLastChar () {
    display.value = display.value.toString().slice(0, -1);
}
// calculate function
function calculate () {
    if (display.value) {
        try {
            // eval function takes some string in a form of a math equation and perform it.
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }
}

// add click listeners to all the buttons
buttons.forEach(btn => {
    btn.onclick = function () {
        // call another function to assign the value of the button
        assignKey(btn.getAttribute('key-value'));
    }
})
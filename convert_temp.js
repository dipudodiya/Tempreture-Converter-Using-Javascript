//ClearTextBox function created to clear the textbox whenever necessary
function clearTextBox() {
    document.getElementById('degrees_entered').value = "";
    document.getElementById('degrees_computed').value = "";
};

//Function created to change the text in the labels when user select second radio button
var convertToFahrenheit = function () {
    var one = document.getElementById('to_fahrenheit').checked;

    if (one == true) { //when second radio button is checked

        document.getElementById('degree_label_1').textContent = "Enter C degrees:";
        document.getElementById('degree_label_2').textContent = "Degrees Fahrenheit:";

        clearTextBox(); // calling cleartextBox function to clear the text box
    }
}

//Function created to change the text in the labels when user select first radio button
var convertToCelsius = function () {
    var two = document.getElementById('to_celsius').checked;

    if (two == true) { //when first radio button is checked

        document.getElementById('degree_label_1').textContent = "Enter F degrees:";
        document.getElementById('degree_label_2').textContent = "Degrees Celsius:";

        clearTextBox(); // calling cleartextBox function to clear the text box
    }
}

// Calcuation based on what radio button is selected
function convertTemp() {
    if (document.getElementById('to_celsius').checked) { //if first radio button is selected
        var calculatedCelsius = document.getElementById('degrees_entered').value;
        if (isNaN(calculatedCelsius)) { //if user entered value is not a number
            alert('You must enter a valid number for degrees.');
            clearTextBox();
        } else { //if user entered value is number then calculate the celsius
            calculatedCelsius = (calculatedCelsius - 32) * (5 / 9);
            document.getElementById('degrees_computed').value = calculatedCelsius.toFixed(1);
        }
    }

    if (document.getElementById('to_fahrenheit').checked) { //if second radio button is selected
        var calculatedFahrenheit = document.getElementById('degrees_entered').value;
        if (isNaN(calculatedFahrenheit)) { //if user entered value is not a number
            alert('You must enter a valid number for degrees.');
            clearTextBox();
        } else { //if user entered value is number then calculate the fahrenheit
            calculatedFahrenheit = (calculatedFahrenheit * (9 / 5) + 32);
            document.getElementById('degrees_computed').value = calculatedFahrenheit.toFixed(1);
        }
    }
}


//Implementation of onload function
window.onload = function () {

    document.getElementById('convert').ondblclick = clearTextBox;
    document.getElementById('degrees_entered').onfocus = clearTextBox;
    document.getElementById('to_fahrenheit').onclick = convertToFahrenheit;
    document.getElementById('to_celsius').onclick = convertToCelsius;
    document.getElementById('convert').onclick = convertTemp;
    document.getElementById('degrees_entered').focus();
};
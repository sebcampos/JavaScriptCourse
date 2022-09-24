/**
 * This method collects the value from the form on the page,
 * validates that all values are able to be converted into the Number type,
 * performs the calculations on these numbers and finally displays the results
 * on the page.
 * @return {void}
*/
function submitForm()
{
    // collect numbers 1 - 3
    
    var formData = collectInputsFromFormContainer();
    var number1 =  convertNumber(formData["number1"]);
    var number2 =  convertNumber(formData["number2"]);
    var number3 =  convertNumber(formData["number3"]);
    // validate numbers
    if (!isValidForm(formData))
    {
        console.log("invalid input submited");
	return;
    }

    // perform calculations
    results = mainCalculations(number1, number2, number3);

    // output calculations
    document.getElementById("result").value =
        'Sum: '+ results["sum"] + "\n" +
        'Average: '+ results["average"] + "\n" +
        'Product: '+ results["product"] + "\n" +
        'Min: '+ results["min"] + "\n" +
        'Max: '+ results["max"] + "\n";
}


/**
 * This method iterates over the form collecting inputs and 
 * returning them as an object where the keys are the input ids
 * and the values are their text values.
 * @return {object}
*/
function collectInputsFromFormContainer()
{
	var formData = {};
	for (let i = 0; i < document.forms["form-container"].elements.length; i++)
	{
		var formItem = document.forms["form-container"].elements[i];
		if (formItem.tagName === "INPUT")
		{
			formData[formItem.id] = formItem.value;
		}
	}
	return formData;
}

/**
 * This method collects the ids/keys of the formData object and uses it
 * to validate all input values returning true if all are valid or false if
 * at least on is not. A second argument can be passed defining a function which 
 * returns a bool to test each input with
 * @param {object} formData the object holding the ids for all inputs in the form
 * @param {function} validationFunct a second function which returns a bool
 * @return {bool} true or false based on form being valid
*/
function isValidForm(formData, validationFunc = false)
{
	for (var id in formData)
	{	
		var btn = document.getElementById(id);
		if (validateInputBox(btn, validationFunc) === false)
		{
			return false;
		}
	}
	return true;
}

/**
 * This method resets the form values and results displayed
 * on the page by setting the form values to empty strings
 * and setting the results value to a default or specified prompt message.
 * @param {String|bool} the designated prompt message or false to use the default
 * @return {void}
*/
function resetFormAndResults(resultVal = false)
{
	// result message to be displayed
	if (resultVal === false)
	{
		resultVal = "Enter 3 numbers in the fields above to have their sum, average, product, min and max displayed here!";	
	}
	// reset values in form
	resetForm();
	// reset results text
	document.getElementById("result").value = resultVal;
	
}


function resetForm()
{
	// reset values in form
        for (let i = 0; i < document.forms["form-container"].elements.length; i++)
        {
                var formItem = document.forms["form-container"].elements[i];
                if (formItem.tagName === "INPUT")
                {
                        formItem.value = "";
                }
        }
}



/**
 * This method takes 3 numbers as arguments
 * and returns an object holding the sum, average,
 * min, and max of the numbers.
 * @param  {Number} number1 first number
 * @param  {Number} number2 second number
 * @param  {Number} number3 third number
 * @return {object} results the calculations and min and max of the args
*/
function mainCalculations(number1, number2, number3)
{
    var results = {};
    results["sum"] = number1 + number2 + number3;
    results["average"] = (results["sum"] / 3).toFixed(2);
    results["product"] = (number1 * number2 * number3).toFixed(2);
    results["min"] = Math.min(number1, number2, number3);
    results["max"] = Math.max(number1, number2, number3);
    return results;
}

/**
 * This method receives a user input as a string
 * then attempts to convert it into a Number type.
 * if the string is converted then the Number type of user input is returned.
 * if the string returns NaN false is returned.
 * @param  {String} userInput string to be converted to Number
 * @return {Number|bool} number for successful conversion, false for failed conversion/
*/
function convertNumber(userInput)
{
    var num = Number(userInput);
    if (isNaN(num))
    {    
	return false;
    }
    return num;

}

/**
 * This method is attached to each input box listening for
 * the keyup event. This method receives the input box triggering
 * the keyup event and then validates the text currently in the box
 * using the convertNumber method. If the text is invalid a prompt will be
 * displayed, else a checkmark appears.
 * @param  {object} btn the button triggering the event
 * @param {function|bool} performs a second validation using the provided function
 * @return {bool}
*/
function validateInputBox(btn, secondValidation = false)
{
	
    // validate the text is not empty
    var textVal = btn.value;
    if (textVal.length < 1)
    {
        return false;
    }

    // validate the contents of the textbox
    var numTextVal = convertNumber(textVal);
    if (numTextVal === false && secondValidation === false)
    {
        // update class to set up red message for invalid entry
        setValidState(btn, false);
        return false;
    }
    else if (numTextVal !== false && secondValidation === false)
    {
    	// update class to set up green check mark for valid entry
    	setValidState(btn, true);
    	return true;
    }
    // validate the contents of the textbox and their range
    else if (numTextVal === false || secondValidation(numTextVal) === false)
    {
        // update class to set up red message for invalid entry
        setValidState(btn, false);
        return false;
    }
    else if (numTextVal !== false && secondValidation(numTextVal) === true)
    {
        // update class to set up green check mark for valid entry
        setValidState(btn, true);
        return true;
    }
    
}



/**
 * This method recieves an input box and sets the visibility of 
 * the invalid message below it to visable based on the isValid argument
 * @param btn {object} the inputbox modify
 * @param isValid {bool} true to remove or false to show error message
 * @return {void}
*/
function setValidState(btn, isValid)
{
	if (isValid === false)
	{
		// update class to set up red message for invalid entry
        	btn.classList.remove("is-valid");
        	btn.classList.add("is-invalid");
        	return;
	}
	// update class to set up green check mark for valid entry
    	btn.classList.remove("is-invalid");
    	btn.classList.add("is-valid");
    	return;
}

function findElementByXPath(xpath) 
{
	return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function findElementsByXPath(xpath) 
{
	return document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
}

document.addEventListener("DOMContentLoaded", function()
{
    // fade in the form
    $("#form-container").fadeIn(1500)
});

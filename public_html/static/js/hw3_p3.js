// default and reset value for results textarea
const resultDefaultPrompt = "Enter a Value to convert to either Celsius or Farenheit";

/**
 * This method retrieves the input from the user and converts the provided 
 * string from a Farenheit representation to its Celsius representation.
 * The conversion is then displayed in the textarea on the page
*/ 
function toCelsius()
{
	var formData = collectInputsFromFormContainer();
	// validate numbers
    	if (!isValidForm(formData))
    	{
        	console.log("invalid input submited");
		return;
    	}
	
	// collect and convert the user input to the NumberType 
	var f = convertNumber(formData["userInput"]);
	
	// calculate the Celsius value from the given Farenheit value. 
	var c =  5/9 * (f - 32);
	
	// Present the conversion result in the text area
	document.getElementById("result").value = f.toFixed(2)+"F is "+c.toFixed(2)+"C";
}


/**
 * This method retrieves the input from the user and converts the provided
 * string from a Celsius representation to its Farenheit representation.
 * The conversion is then displayed in the textarea on the page
*/
function toFarenheit()
{
        var formData = collectInputsFromFormContainer();
        // validate numbers
        if (!isValidForm(formData))
        {
                console.log("invalid input submited");
                return;
        }
	
	// collect and convert the user input to the NumberType
        var c = convertNumber(formData["userInput"]);
        
	// calculate the Farenheit value from the given Celsius value.
	var f =  (9/5 * c) + 32;

	// Present the conversion result in the text area
        document.getElementById("result").value = c.toFixed(2)+"C is "+f.toFixed(2)+"F";
}




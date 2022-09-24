// default and reset value for results textarea
const resultDefaultPrompt = "Enter a Value to convert to either Celsius or Farenheit";


function toCelsius()
{
	var formData = collectInputsFromFormContainer();
	// validate numbers
    	if (!isValidForm(formData))
    	{
        	console.log("invalid input submited");
		return;
    	}
	var f = convertNumber(formData["userInput"]);
	var c =  5/9 * (f - 32);

	document.getElementById("result").value = f+"F is "+c+"C";;
}



function toFarenheit()
{
        var formData = collectInputsFromFormContainer();
        // validate numbers
        if (!isValidForm(formData))
        {
                console.log("invalid input submited");
                return;
        }
        var c = convertNumber(formData["userInput"]);
        var f =  (9/5 * c) + 32;

        document.getElementById("result").value = c+"C is "+f+"F";
}




/**
 * This method validates the user input,
 * collects the elements in the conversion-rate and conversion-result classes
 * storing them into parallel arrays. After it uses the conversion rate and user input
 * to calculate the coversion result and store that result into the coresponding 
 * conversion-result element's `textContent` attribute.
 * @return {void}
*/
function fillConversionTable()
{
	// collect the usAmount provided by the user input
	var usAmount = convertNumber(document.getElementById("us-dollars").value);
	
	// validate the usAmount
	if (usAmount === false)
	{
		return;
	}

	// collect coversion rate elements and conversion result elements into parallel arrays
	var rates = document.getElementsByClassName("conversion-rate");
	var results = document.getElementsByClassName("conversion-result");
	
	// iterate over both arrays
	for (i = 0; i < results.length; i++)
	{	
		// perform conversion calculation, format to 2 decimal places, and set the result
		// as the current `result` elements `textConent` attribute
		results[i].textContent = (convertNumber(rates[i].textContent) * usAmount).toFixed(2);
	}
	return 0;
}

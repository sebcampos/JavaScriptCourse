// globals for this particular page
const defaultResults = "";
let X = -1;
let Y = -1;


/**
 * This function validates that X and Y are no longer -1, and calculates their product.
 * Then it collects the the input from the user to compare against the product of X and Y.
 * If the user input matches the product the text area wil display "Very Good" and a prompt to play
 * again will be presented to the user. If not, a message "No. Please try again" will be presented in the 
 * textarea.
 * @return {void}
*/ 
function submitFormPart3ExtraCredit()
{
	// calculate correct answer
	let correctAnswer = X * Y;

	// verify X and Y have been assigned new integers
	if (X === -1 && Y === -1)
	{
		return;
	}
	// collect the form data
	var formData = collectInputsFromFormContainer();
   	// collect the user response
	var userResponse =  convertNumber(formData["userInput"]);
	// validate user response
	if (userResponse === correctAnswer)
	{
		// hide prompts, display correct message, display playagain prompt
		hidePrompts();
		document.getElementById("result").value = "Very good!";
		displayPlayAgainPrompt();
	}
	else
	{
		// display incorrect prompt
		document.getElementById("result").value = "No. Please try again.";
	}
}



/**
 * This method hides the original inputs and prompt and is used once a user
 * inputs the correct answer
 * @return {void}
*/ 
function hidePrompts()
{
	// collect elements to be hidden
	var prompts = document.getElementsByClassName("hideUs");
	
	// iterate over elements setting their style.display to none
	for (let i = 0; i < prompts.length; i++)
	{
		prompts[i].style.display = "none";
	}

}

/**
 * This method is used to display a thanks for playing message in the 
 * textarea if a user selects the NO option when given the play again prompt
 * @return {void}
*/ 
function thanksForPlayingMessage()
{
	document.getElementById("result").value = "Thanks for playing, see you next time";
}


/**
 * This method displays the play again prompt to the user with buttons YES and NO
 * @return {void}
*/ 
function displayPlayAgainPrompt()
{	
	$(".invis2").each(function(index) {
        	$(this).delay(500*index).fadeIn(1500);
    	});
}

/**
 * This method is used to help validate the user input by returning true
 * if the input does not contain a decimal.
 * @return {boolean} isValid true if no decimals are in the userinput
*/ 
function notDecimial(num)
{
	var isValid = true;
	if (String(num).includes(".") || num % 1 != 0)
	{
		isValid = false;
	}
	return isValid;
}

/**
 * This method assigns X and Y as random integers between 1 and 9
 * @return {void}
*/ 
function defineXAndY()
{
	// two one-digit integers
	X = Math.floor(Math.random() * 10);
	Y = Math.floor(Math.random() * 10);
}


/**
 * This method defines X and Y and then modifies the prompt to 
 * display the values of X and Y by replaceing the X_PLACEHOLDER and Y_PLACEHOLDER
 * strings with their corresponding values
 * @return {void}
*/ 
function displayAndDefineXAndY()
{
	var divXandY = document.getElementById("x_and_y_text_area");
	var text = divXandY.textContent;
	if (X === -1 && Y === -1)
	{
		defineXAndY();
		text = text.replace("X_PLACEHOLDER", X);
		text = text.replace("Y_PLACEHOLDER", Y);
	}
	else
	{
		var X_COPY = X;
		var Y_COPY = Y;
		defineXAndY();
		text = text.replace(X_COPY, X);
		text = text.replace(Y_COPY, Y);
	}
	divXandY.textContent = text;
}


document.addEventListener("DOMContentLoaded", function()
{
    displayAndDefineXAndY();
});

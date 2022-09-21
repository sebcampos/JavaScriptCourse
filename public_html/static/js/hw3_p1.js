// default and reset value for results textarea
const resultDefaultPrompt = "Enter the students Homwork average, midterm score, final exam score, and participation score to view the final grade in this text area!";


/**
 * This method collects the form data, validates that all inputs are  integers and 
 * within the range of 0 - 100 inclusive, then calculates the final average/grade for 
 * a student provided their Homework average, mid term exam, final exam, and participation points.
 * Finally the final average/grade is displayed to the user along with the grades corresponding
 * letter grade. If the grade is a D or an F the message will include that the student needs
 * to retake the course.
 * @return {void}
*/
function submitFormHw3P1()
{
	// collect form data
	var formData = collectInputsFromFormContainer();
	
	// validate form contains number within a range 0 -100 inclusive
	if (!isValidForm(formData, validateInputRange))
	{
		return;
	}

	// collect the validated form data as numeric types
	var hwAvg = convertNumber(formData["hwavg"]);
        var midExam = convertNumber(formData["midterm"]);
        var finalExam = convertNumber(formData["finalexam"]);
        var participation = convertNumber(formData["participation"]);
	
	// calculate the final average score and round to nearest integer
	var finalAverage = Math.round(
		(.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
	);

	// define the grade as a letter
	var letterGrade = gradeToLetter(finalAverage);
	
	// set the result element's text to display the letter grade and final average score 
	document.getElementById("result").value = 
		"Students final average:\n" + letterGrade+": " + finalAverage;
	
	// if the student has a D or lower append to the message
	if (letterGrade === "F" || letterGrade === "D")
	{
		document.getElementById("result").value += "\nStudent must retake the course.";
	}
}



/**
 * This method is handed to the isValidForm method so that 
 * it can also validate the range of the input
 * @param {Numeric} numericVal 
 * @return {bool} true if in valid range
*/
function validateInputRange(numericVal)
{
	return (numericVal > -1 && numericVal < 101);
}


/**
 * This function takes a numeric representation of a grade 
 * and returns the corresponding letter grade
 * @param {Numeric} grade 
 * @return {String} letterGrade
*/ 
function gradeToLetter(grade)
{
	var num = convertNumber(grade);
	if (num <= 59)
	{
		return "F";
	}
	else if (num >= 60 && num <= 69)
        {
                return "D";
        }
	else if (num >= 70 && num <= 79)
        {
                return "C";
        }
        else if (num >= 80 && num <= 89)
        {
                return "B";
        }
        else if (num >= 90)
        {
                return "A";
        }
}


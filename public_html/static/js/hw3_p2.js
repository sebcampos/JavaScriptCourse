function submitFormHw3P2()
{
	// collect form data
	var formData = collectInputsFromFormContainer();
	var sellerName = formData["seller-name"];
	delete formData["seller-name"];
	if (sellerName.length < 3)
	{
		return;
	}
	// validate form integers
	if (!isValidForm(formData, false))
	{
		return;
	}
	// convert items inputs to numeric type
        var item1 = convertNumber(formData["item1-input"]);
        var item2 = convertNumber(formData["item2-input"]);
        var item3 = convertNumber(formData["item3-input"]);
        var item4 = convertNumber(formData["item4-input"]);
	updateTable(item1, item2, item3, item4);
}



function updateTable(item1, item2, item3, item4)
{	
	var total = 0;
	
	// bottom input boxes
	var totalAmountBox = findElementByXPath("//td[@id='total-amount-sold']//input");
	var totalWeeklyEarningsBox = findElementByXPath("//td[@id='total-weekly-earnings']//input");

	// array to contain items 1 - 4
	var itemValues = [item1, item2, item3, item4];

	// collect the items price text
	var prices = findElementsByXPath("//td[@class='item-price']//div/text()");
	
	// collect the quantity sold and total price table/input elements
	var quantitySold = findElementsByXPath("//td[@class='item-qt-sold']//input");
	var totalPrice = findElementsByXPath("//td[@class='item-total']//input");
	
	// iterate over parallel lists
	for (let i = 0; i < prices.snapshotLength; i++)
	{
		// collect the text content of prices
		let priceString = prices.snapshotItem(i).textContent;
		// remove "$" symbol and convert to number fixed to 2 decimal places
		let numberPrice = convertNumber(priceString.replace("$","")).toFixed(2);
		// update coresponding quantity sold element with the item value
		quantitySold.snapshotItem(i).value = itemValues[i];
		// calculate total price and set as totalPrice element value
		totalPrice.snapshotItem(i).value = (itemValues[i] * numberPrice).toFixed(2);
		total += (itemValues[i] * numberPrice);
	}
	
	totalAmountBox.value = total.toFixed(2);
	totalWeeklyEarningsBox.value = calcTotalWeeklyEarnings(total).toFixed(2);
}


function calcTotalWeeklyEarnings(totalAmountSold)
{
	return 250 + (totalAmountSold * 0.09);
}


function resetTable()
{
        var inputs = findElementsByXPath("//td//input");
	for (let i = 0; i < inputs.snapshotLength; i++)
	{
		inputs.snapshotItem(i).value = "";
	}
}


function validateInputStringSize(btn)
{
	var inputString = btn.value;
	if (inputString.length >= 3)
	{
		setValidState(btn, true);
		return;
	}
	setValidState(btn, false);
}


function isNonNegative(num)
{
	return (num > -1);
}


function disableInputsInTable()
{
	var elements = findElementsByXPath(
		"//td[@class='item-qt-sold' or @class='item-total' or @id='total-amount-sold' or @id='total-weekly-earnings' ]//input"
	);
	for (let i = 0; i < elements.snapshotLength; i++)
        {
                elements.snapshotItem(i).disabled = true;
        }
    
}

document.addEventListener("DOMContentLoaded", disableInputsInTable);

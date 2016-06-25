

// Moved this function to the top, as that makes
// more sense (to me).
function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// Predefined variables
var claim1 = new Claim("John Doe", "Specialist", 1100);
var claim2 = new Claim("Jane Doe", "Optical", 100);
var claim3 = new Claim("Joe Johnson", "Emergency", 31000);
var claim4 = new Claim("Sharon Smith", "Emergency", 1300);
var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

// My new claims
var claim6 = new Claim("John Cappucino", "Emergency", 2350);
var claim7 = new Claim("Vincent Risotto", "Primary Care", 4890);
var claim8 = new Claim("Dante Chicken-Parmigiana", "Emergency", 100000);
var claim9 = new Claim("Regina Marscapone", "Specialist", 5175);
var claim10 = new Claim("Tony Spaghetti", "Optical", 300);

var secondList = [claim6, claim7, claim8, claim9, claim10];

// Combine the two lists:
var combinedArray = initialList.concat(secondList);

// Everything has been initialized, let's make some
// functions!

//function to determine percent covered
function percentCoveredCalc(claimant){
	var percentage = 0;
	var careType = claimant.visitType;

	switch(careType){
		case "Optical":
			percentage = 0;
			break;
		case "Specialist":
			percentage = 10;
			break
		case "Emergency":
			percentage = 100;
			break;
		case "Primary Care":
			percentage = 50;
			break;
		default:
			break;
	}

	return percentage;

}

//function to determine amount covered
function amountCoveredCalc(claimant, percentage){
	var name = claimant.patientName;
	var initialCost = claimant.visitCost;
	var amountCovered = Math.round((initialCost * percentage) / 100);
	totalPayedOut += amountCovered;
	// JQuery appending
	$(document).ready(function(){
		$("ul").append($('<li>').text("Paid out $" + amountCovered + " for " + name + "."));
	});
	console.log("Paid out $" + amountCovered + " for " + name + ".");
}

// iterator function for our combinedArray
function claimsProcessor(claimants){
	var percentage = 0;
	for(var i = 0; i < claimants.length; i++){
		percentage = percentCoveredCalc(claimants[i]);
		amountCoveredCalc(claimants[i], percentage);
	}
// more JQuery
	$(document).ready(function(){
		$("footer").append("We have payed out $" + totalPayedOut + " this year.");
	});
	console.log("We have payed out $" + totalPayedOut + " this year.");
}

// invoke the function
claimsProcessor(combinedArray);

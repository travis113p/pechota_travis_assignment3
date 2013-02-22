/*Travis Pechota
SDI 1302 - Assignment 3
working.*/

//variables
var cartsPerAisle = 5;
	whatAisles = ["soup", 
				"paper"];
	iQuit = "Bill, I quit!";
	soups = {
			"Progresso":["Chunky Potato", "Chicken Noodle"],
			"Campbells":["Clam Chowder", "Beef Barley"],
			"Meijer":false
			};
	additionalAisle1 = "Chips";
	additionalAisle2 = "Coffee";

//boolean
var shortNight = function (aisles) {
	if (aisles <= whatAisles.length) {
		shortNight = true
	} else {
		shortNight = false
	};
	return shortNight;
};

//object with accessor
var aisle = {
	"carts": 6,
	"timePerCart": 60,
	"timePerAisle": function (){
		var totalTime = this.timePerCart * this.carts;
		return totalTime
	}
};

//number
var aisleNum = function(number) {
	while (cartsPerAisle <= number) {
		cartsPerAisle = cartsPerAisle + 1;
	}; console.log("I now have " + cartsPerAisle + " carts for each aisle.  I probably won't finish on time.");
	return cartsPerAisle;
}	;

//string
var moreAisles = function(numberOne, numberTwo) {
	var chips = "Now I have to do " + numberOne + " as well.";
	var coffee = "And " + numberTwo + "?  I really will be here until 11.";
	return chips + " " + coffee;
};

//array
var aislesDone = function(aisleName, number) {
	console.log("I have finished Progresso " + soups.Progresso + " and Campbells " + soups.Campbells + ".  Do I have Meijer soups? " + soups.Meijer + ".");
	for (var done = number; done < whatAisles.length; done++) {
		console.log("I have finished " + whatAisles[done] + ".");
	};
	return aisleName + number;
};

//calls
var earlyExit = shortNight(1);
console.log("It is " + earlyExit + " that I will leave early tonight.");

console.log("It takes me " + aisle.timePerAisle() + " minutes each aisle.");

var carts = aisleNum(5);
console.log("\"Bill, I don't need anymore carts.  I'll be here until 11.\"");

var tooManyAisles = moreAisles(additionalAisle1, additionalAisle2);
console.log(tooManyAisles);

var array = aislesDone(whatAisles[0], 0);
console.log("Since " + whatAisles[0]  + " and " + whatAisles[1] + " are all done, and other stockers are finishing, they come to help me finish by 6:30, not 11.");

console.log(iQuit);

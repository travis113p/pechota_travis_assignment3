//variables
/*var day = "Thursday";
	aisles = ["Soups", "Juices", "Candy"];
	cartsPerAisle = 4;
	longDayProclaim = "It's going to be a long day.";
	shortDayProclaim = "It should be a quick day.";
	additionalAisle1 = "Chips";
	additionalAisle2 = "Coffee";*/

var cartsPerAisle = 5;
	whatAisles = ["soup", 
				"paper"];
	extraAisle = 1;
	longNight = true;
	iQuit = "Bill, I quit!";
	soups = {
			"Progresso":["Chunky Potato", "Chicken Noodle"],
			"Campbells":["Clam Chowder", "Beef Barley"],
			"Meijer":false
			};

//boolean
var shortNight = function (aisles) {
	if (aisles <= whatAisles.length) {
		shortNight = true
	} else {
		shortNight = false
	}
	return shortNight
}

//number
var aisleNum = function(number) {
	while (cartsPerAisle <= number) {
		cartsPerAisle = cartsPerAisle + 1;
	}; console.log("I now have " + cartsPerAisle + " carts for each aisle.  I probably won't finish on time.");
	return cartsPerAisle
}	

//array
var aislesDone = function(aisleName, number) {
	for (var done = number; done < whatAisles.length; done++) {
		console.log("I have finished " + whatAisles[done] + ".");
	};
	return aisleName + number;
};

//object with accessor
var aisle = {
	"carts": 6,
	"timePerCart": 60,
	"timePerAisle": function (){
		var totalTime = this.timePerCart * this.carts;
		return totalTime;
	}
}

//calls
var carts = aisleNum(5);
console.log("\"Bill, I don't need anymore carts.  I'll be here until 11.\"");

var earlyExit = shortNight(1)
console.log("It is " + earlyExit + " that I will leave early tonight.")

var array = aislesDone(whatAisles[0], 0)
console.log("Since " + whatAisles[0]  + " and " + whatAisles[1] + " are all done, and other stockers are finishing, they come to help me finish by 6:30, not 11.");


console.log(aisle.timePerAisle());



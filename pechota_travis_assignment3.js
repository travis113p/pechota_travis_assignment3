//variables
/*var day = "Thursday";
	aisles = ["Soups", "Juices", "Candy"];
	cartsPerAisle = 4;
	longDayProclaim = "It's going to be a long day.";
	shortDayProclaim = "It should be a quick day.";
	additionalAisle1 = "Chips";
	additionalAisle2 = "Coffee";*/

/*var cartsPerAisle = 5;
	whatAisles = ["soup", 
				"paper"];
	extraAisle = 1;
	longNight = true;
	iQuit = "Bill, I quit!";
	soups = {"Progresso":["Chunky Potato", "Chicken Noodle"],
			"Campbells":["Clam Chowder", "Beef Barley"]};

//boolean
var shortNight = function (aisles) {
	if (aisles <= whatAisles.length) {
		shortNight = true
	} else {
		shortNight = false
	}
	return shortNight
}



//calls
var earlyExit = shortNight(1)
console.log("It is " + earlyExit + " that I will leave early tonight.")*/

//object with accessor
var aisle = {
	"carts": 6,
	"timePerCart": 60,
	"timePerAisle": function (){
		var totalTime = this.timePerCart * this.carts;
		return totalTime;
	}
}

//object with mutator

//calls
console.log(aisle.timePerAisle());


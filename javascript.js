// //SET ONLOAD VARIABLES AND GET CURRENT TIME
// var clock = document.getElementById("clock");
// var millisecondContainer = document.getElementById("millisecond");
// var timeStyle = "twentyfour";
// var date = new Date();
// var hours = date.getHours();
// var minutes = date.getMinutes();
// var seconds = date.getSeconds();
// var milliseconds = date.getMilliseconds();
// var period;
// var lightGreen = "#00FF74";
// var darkGray = "#454545";
// var am = document.getElementById("am");
// var pm = document.getElementById("pm")
// var hours_change_button = document.getElementById("hours_change");

// //CALLS tellTime() and getMilliseconds() AND PASSES RESULT INTO DIVS
// function loadClock(){
// 	clock.innerHTML = tellTime(hours, minutes, seconds);
// 	millisecondContainer.innerHTML = getMilliseconds(milliseconds);
// };

// //SO THAT CLOCK IS RENDERED ON PAGE LOAD
// loadClock();

// //THE MAIN TIME-TELLING FUNCTION
// function tellTime(hours, minutes, seconds){
// 	//SET DISPLAY BASED ON CLOCK MODE
// 	if(timeStyle === "twelve" && hours === 0){
// 		hours = 12;
// 	}
// 	else if(timeStyle === "twelve" && hours > 12){
// 		hours = hours - 12;
// 	}
// 	else{
// 		hours = hours;
// 	};
	
// 	//ADD LEADING ZEROS TO SINGLE-DIGIT NUMBERS
// 	for(i = 0; i < arguments.length; i++){
// 		if(arguments[i].toString().length === 1){
// 			arguments[i] = "0" + arguments[i];
// 		};
// 	};

// 	//BUILD THE FINAL TIME INPUT
// 	time = hours + ":" + minutes + ":" + seconds;
// 	return time;
// };

// //ADD LEADING ZEROS TO SINGLE- AND DOUBLE-DIGIT NUMBERS, IF NEEDED
// function getMilliseconds(milliseconds){
// 	if(milliseconds.toString().length === 1){
// 		milliseconds = "00" + milliseconds;
// 	}
// 	else if(milliseconds.toString().length === 2){
// 		milliseconds = "0" + milliseconds;
// 	}
// 	else{
// 		milliseconds = milliseconds;
// 	};
// 	return milliseconds;
// };

// //GETS NEW DATE INFO AND UPDATES THE CLOCK WITH loadClock() EVERY MILLISECOND
// window.setInterval(function(){
// 	date = new Date();
// 	hours = date.getHours();
// 	minutes = date.getMinutes();
// 	seconds = date.getSeconds();
// 	milliseconds = date.getMilliseconds();

// 	if(hours < 12){
// 		period = "am";
// 	}
// 	else{
// 		period = "pm";
// 	};

// 	if(timeStyle === "twelve"){
// 		if(period === "am"){
// 			am.style.color = lightGreen;
// 			pm.style.color = darkGray;
// 		}
// 		else{
// 			pm.style.color = lightGreen;
// 			am.style.color = darkGray;
// 		};
// 	};

// 	loadClock();
// }, 1);

// //TOGGLES BETWEEN TWENTY-FOUR AND TWELVE HOUR TIME DISPLAY
// function hoursChange(element){
// 	if(element.getAttribute("hours") === "twentyfour"){
// 		timeStyle = "twelve";
// 		element.setAttribute("hours", timeStyle);
// 		element.innerHTML = "twelve hour";

// 		//SET DISPLAY AND STYLE BASED ON CLOCK MODE/ACTUAL TIME
// 		if(period === "pm"){
// 			pm.style.color = lightGreen;
// 			am.style.color = darkGray;
// 		}
// 		else{
// 			am.style.color = lightGreen;
// 			pm.style.color = darkGray;
// 		};
// 	}
// 	else{
// 		timeStyle = "twentyfour";
// 		element.setAttribute("hours", timeStyle);element.innerHTML = "twenty-four hour";
// 		am.style.color = darkGray;
// 		pm.style.color = darkGray;
// 	};
// };

// //ADDS A CLICK LISTENER TO THE hours_change BUTTON AND RUNS hoursChange() ON CLICK
// hours_change_button.onclick = function(){hoursChange(this)};
























// var loadClock = function(time){
// 	var clockContainer = document.getElementById("clock");
// 	var millisecondContainer = document.getElementById("millisecond");
// 	var hours_change_button = document.getElementById("hours_change");
// 	var am = document.getElementById("am");
// 	var pm = document.getElementById("pm");
// 	var timeStyle = "twentyfour";
// 	var hours = time[0];
// 	var minutes = time[1];
// 	var seconds = time[2];
// 	var milliseconds = time[3];
// 	var lightGreen = "#00FF74";
// 	var darkGray = "#454545";
// 	var period;


// 	if(hours < 12){
// 		var period = "am";
// 	}
// 	else{
// 		var period = "pm";
// 	};

// 	//SET DISPLAY BASED ON CLOCK MODE
// 	// if(timeStyle === "twelve" && hours === 0){
// 	// 	hours = 12;
// 	// }
// 	// else if(timeStyle === "twelve" && hours > 12){
// 	// 	hours = hours - 12;
// 	// }
// 	// else{
// 	// 	hours = hours;
// 	// };


// 	function hoursChange(element){
// 		if(element.getAttribute("hours") === "twentyfour"){
// 			timeStyle = "twelve";
// 			element.setAttribute("hours", timeStyle);
// 			element.innerHTML = "twelve hour";

// 			//SET DISPLAY AND STYLE BASED ON CLOCK MODE/ACTUAL TIME
// 			if(period === "pm"){
// 				pm.style.color = lightGreen;
// 				am.style.color = darkGray;
// 			}
// 			else{
// 				am.style.color = lightGreen;
// 				pm.style.color = darkGray;
// 			};
// 		}
// 		else{
// 			timeStyle = "twentyfour";
// 			element.setAttribute("hours", timeStyle);element.innerHTML = "twenty-four hour";
// 			am.style.color = darkGray;
// 			pm.style.color = darkGray;
// 		};
// 	};


// 	clockContainer.innerHTML = hours + ":" + minutes + ":" + seconds;
// 	millisecondContainer.innerHTML = milliseconds;

// 	hours_change_button.onclick = function(){
// 		hoursChange(this);
// 	};

// 	window.setInterval(function(){
// 		loadClock(getTime());
// 	}, 1);
// };






// var getTime = function(){
// 	var date = new Date();
// 	var hours = date.getHours();
// 	var minutes = date.getMinutes();
// 	var seconds = date.getSeconds();
// 	var milliseconds = date.getMilliseconds();

// 	function buildTime(hours, minutes, seconds, milliseconds){
// 		for(i = 0; i < arguments.length; i++){
// 			//LEADING ZEROS FOR MILLISECONDS
// 			if(i === arguments.length - 1){
// 				if(arguments[i].toString().length === 1){
// 					arguments[i] = "00" + arguments[i];
// 				}
// 				else if(arguments[i].toString().length === 2){
// 					arguments[i] = "0" + arguments[i];
// 				};
// 			}
// 			//LEADING ZEROS FOR HOURS, MINUTES, SECONDS
// 			else{
// 				if(arguments[i].toString().length === 1){
// 					arguments[i] = "0" + arguments[i];
// 				};
// 			};
// 		};
		
// 		return [hours, minutes, seconds, milliseconds];
// 	};

// 	return buildTime(hours, minutes, seconds, milliseconds);
// };

// loadClock(getTime());














//AS AN OBJECT...
var clock = {
	"container": document.getElementById("clock"),
	"getTime": function(){
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var millisecond = date.getMilliseconds();

		if(hour < 12){
			this.period = "am";
		}
		else{
			this.period = "pm";
		};

		this.hour = hour;
		this.minute = minute;
		this.second = second;
		this.millisecond = millisecond;

		//return [hour, minute, second, millisecond];
	},
	"setTime": function(){

		this.container.innerHTML = this.hour + ":" + this.minute + ":" + this.second;
	},
	"timeStyle_button": {
		"timeStyle": "twentyfour"
	}
};



clock.setTime(clock.getTime());

// window.setInterval(function(){
// 	clock.getTime();
// 	console.log(clock)
// }, 1000);
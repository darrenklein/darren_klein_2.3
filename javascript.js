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
var clock = document.getElementById("clock");
var millisecondContainer = document.getElementById("millisecond");
var timeStyle = "twentyfour";
var date = new Date();
clock.innerHTML = tellTime(date.getHours(), date.getMinutes(), date.getSeconds());
millisecondContainer.innerHTML = getMilliseconds(date.getMilliseconds());

var lightGreen = "#00FF74";
var darkGray = "#454545";

function tellTime(hours, minutes, seconds){
	if(timeStyle === "twelve" && hours > 12){
		hours = hours - 12;
		document.getElementById("pm").style.color = lightGreen;
		document.getElementById("am").style.color = darkGray;
	}
	else if(timeStyle === "twelve" && hours === 12){
		document.getElementById("pm").style.color = lightGreen;
		document.getElementById("am").style.color = darkGray;
	}
	else if(timeStyle === "twelve" && hours < 12){
		document.getElementById("am").style.color = lightGreen;
		document.getElementById("pm").style.color = darkGray;
	}
	else{
		document.getElementById("am").style.color = darkGray;
		document.getElementById("pm").style.color = darkGray;
	};
	
	for(i = 0; i < arguments.length; i++){
		if(arguments[i].toString().length === 1){
			arguments[i] = "0" + arguments[i];
		};
	};

	time = hours + ":" + minutes + ":" + seconds;
	return time;
};

function getMilliseconds(milliseconds){
	if(milliseconds.toString().length === 1){
		milliseconds = "00" + milliseconds;
	}
	else if(milliseconds.toString().length === 2){
		milliseconds = "0" + milliseconds;
	}
	else{
		milliseconds = milliseconds;
	};
	return milliseconds;
};

window.setInterval(function(){
	var date = new Date();
	clock.innerHTML = tellTime(date.getHours(), date.getMinutes(), date.getSeconds());
}, 1000);

window.setInterval(function(){
	var date = new Date();
	millisecondContainer.innerHTML = getMilliseconds(date.getMilliseconds());
}, 1);

function hoursChange(element){
	if(element.getAttribute("hours") === "twentyfour"){
		timeStyle = "twelve";
		element.setAttribute("hours", timeStyle);
		element.innerHTML = "twelve-hour";
	}
	else{
		timeStyle = "twentyfour";
		element.setAttribute("hours", timeStyle);element.innerHTML = "twenty-four hour";
	};
};

document.getElementById("hours_change").addEventListener("click", function(){hoursChange(this)});
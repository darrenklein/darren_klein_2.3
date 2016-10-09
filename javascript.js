var container = {
	"clockContainer": document.getElementById("clock"),
	"millisecondContainer": document.getElementById("millisecond"),
	"timeStyle_button": document.getElementById("timeStyle_button"),
	"am": document.getElementById("am"),
	"pm": document.getElementById("pm")
};

var clock = {
	"getTime": function(){
		var date = new Date();
		var hour = date.getHours();
		var minute = date.getMinutes();
		var second = date.getSeconds();
		var millisecond = date.getMilliseconds();

		this.period = "pm";
		if(hour < 12){
			this.period = "am";
		};

		if(this.timeStyle_button.timeStyle === "twelve"){
			if(hour < 12){
				if(hour === 0){
					var hour = 12;
				};
				am.classList.add("illuminated");
				pm.classList.remove("illuminated");
			}
			else if(hour > 12){
				var hour = hour - 12;
				am.classList.remove("illuminated");
				pm.classList.add("illuminated");
			}
			else{
				am.classList.remove("illuminated");
				pm.classList.add("illuminated");
			};
		};

		this.buildTime(hour, minute, second, millisecond);
	},
	"buildTime": function(hour, minute, second, millisecond){
		for(i = 0; i < arguments.length; i++){
			if(i === arguments.length - 1){
				if(arguments[i].toString().length === 1){
					arguments[i] = "00" + arguments[i];
				}
				else if(arguments[i].toString().length === 2){
					arguments[i] = "0" + arguments[i];
				};
			}
			else{
				if(arguments[i].toString().length === 1){
					arguments[i] = "0" + arguments[i];
				};
			};
		};

		this.hour = hour;
		this.minute = minute;
		this.second = second;
		this.millisecond = millisecond;
	},
	"setTime": function(){
		return [this.hour + ":" + this.minute + ":" + this.second, this.millisecond];
	},
	"timeStyle_button": {
		"timeStyle": "twentyfour",
		"timeStyle_change": function(button){
			if(this.timeStyle === "twentyfour"){
				this.timeStyle = "twelve";
				button.innerHTML = "twelve hour";

				if(clock.period === "pm"){
					pm.classList.add("illuminated");
					am.classList.remove("illuminated");
				}
				else{
					am.classList.add("illuminated");
					pm.classList.remove("illuminated");
				};
			}
			else{
				this.timeStyle = "twentyfour";
				button.innerHTML = "twenty-four hour";
				am.classList.remove("illuminated");
				pm.classList.remove("illuminated");
			};	
		}
	}
};

container.clockContainer.innerHTML = clock.setTime(clock.getTime())[0];
container.millisecondContainer.innerHTML = clock.setTime(clock.getTime())[1];

container.timeStyle_button.addEventListener("click", function(){
	clock.timeStyle_button.timeStyle_change(this)
});

window.setInterval(function(){
	container.clockContainer.innerHTML = clock.setTime(clock.getTime())[0];
	container.millisecondContainer.innerHTML = clock.setTime(clock.getTime())[1];
}, 1);
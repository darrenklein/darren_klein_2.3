var clock = {
	"container": document.getElementById("clock"),
	"millisecondContainer": document.getElementById("millisecond"),
	"am": document.getElementById("am"),
	"pm": document.getElementById("pm"),
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

		if(this.timeStyle_button.timeStyle === "twelve" && hour === 0){
			hour = 12;
		}
		else if(this.timeStyle_button.timeStyle === "twelve" && hour > 12){
			hour = hour - 12;
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
		this.container.innerHTML = this.hour + ":" + this.minute + ":" + this.second;
		this.millisecondContainer.innerHTML = this.millisecond;
	},
	"timeStyle_button": {
		"button": document.getElementById("timeStyle_button"),
		"timeStyle": "twentyfour",
		"timeStyle_change": function(button){
			if(this.timeStyle === "twentyfour"){
				this.timeStyle = "twelve";
				button.innerHTML = "twelve hour";

				if(clock.period === "pm"){
					clock.pm.classList.add("illuminated");
					clock.am.classList.remove("illuminated");
				}
				else{
					clock.am.classList.add("illuminated");
					clock.pm.classList.remove("illuminated");
				};
			}
			else{
				this.timeStyle = "twentyfour";
				button.innerHTML = "twenty-four hour";
				clock.am.classList.remove("illuminated");
				clock.pm.classList.remove("illuminated");
			};	
		}
	}
};

clock.setTime(clock.getTime());

clock.timeStyle_button.button.onclick = function(){
	clock.timeStyle_button.timeStyle_change(this);
};

window.setInterval(function(){
	clock.setTime(clock.getTime());
}, 1);
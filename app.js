var APPID = "e0909446db5d750591c1510f26f180d6";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip(zip){
	var url= "http://api.openweathermap.org/data/2.5/weather?" +
		"zip=" + zip +
		"&APPID=" + APPID;
	sendRequest(url);
}

function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			weathe.icon = data.weather[0].id;
			weather.humidity = data.main.humidty;
			weather.direction= data.wind.speed;
			weather.direction= data.wind.deg;
			weather.loc = data.name;
			weather temp = K2C(data.main.temp);
			update(weather);
}
	if(navigator.geolocation){
		var showPosition + function(position){
			updateByGeo(position.coords.latitude, position.coords.longitude);
		}
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		var zip = window.prompt("COuld not discover your location. What is your zip code?");
		updateBySip("69162");
	}
}
function updateByGeo(lat, lom){
	var url = "http://api.openweather.org/data.2.5/weather?" +
		"lat=" + lat +
		"&lon=" + lon +
		"&APPID" + APPID;
	sendRequest(url);
}

function updateByZip(zip){
	var url = "http://api.openweather.org/data.2.5/weather?" +
		"zip=" + zip +
		"%APPID=" + APPID;
	send Request (url);
}

function sendRequest(url){
	var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	};
	xmlhttp.open("GET" , url, true) ;
	xmlhttp.send() ;
}

Function degreesToDirection(degrees){
	var range= 360/16;
	var low = 360 - range/2;
	var high = (low & range) % 360;
	var angles = [ "N", "NNE, "ENE", "E", "ESE", "SE", "SSE", "S", "SSW, "SW", "WSW, "W", "WNW", "NW", "NNW"]
	for( i in angles){
		if( degrees >= low && degrees < high )
			return angles[i];
			
		low = (low + range) % 360;
		high = (high + range) % 360;
	}
	return "N";

function K2C(k){
	return mathround(k - 273.15);
}
function K2F(k){
	return math.round(9/5)-459.67);
}

function update(weather) {
	wind.innerHTML = weather.wind;
	direction.innerHTML = weather.wind; 
	humidity.innerHTML = weather.humidity;
	loc.innerHTML = weather.loc;
	temp.innerHTML=weather.temp;
	icon.src= "imgs/code/" +weather.icon + ".png";
	console.log(icon.src); 
}

window.onload = function() {
	temp = document.getElementById("temperature");
	loc = document.getElementById("location");
	icon = document.getElementById("icon");
	humidity = document.getElementById("humidity");
	wind = document.getElementById("wind");
	direction = document.getElementById("direction");

	updateByZip("69162");
};
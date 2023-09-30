var settings = {
	async: true,
	crossDomain: true,
	url: 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=${encodeURIComponent(location)}&days=6',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e2008fd054mshe5fde75adfb7657p1fbd4ejsne1a4b1e3eb0a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
	var weatherinfo = (response);

});

var dateObj = new Date();
//remove all console.log after build is complete
console.log (dateObj);

var getDayName = (dayType, dateVal = dateObj) => 
	dateVal.toLocaleDateString('en-US', {weekday: dayType});

function fetchWeatehrData(location){
	var apiURL = 'https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=6';
}

navigator.geolocation.getCurrentPosition(position => {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var location = '${latitude}, ${longitude}';
	fetchWeatehrData(location);
}, error => {
	console.log('Error getting location', error);
})
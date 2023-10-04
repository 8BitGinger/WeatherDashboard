var url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e2008fd054mshe5fde75adfb7657p1fbd4ejsne1a4b1e3eb0a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

function getWeather () {
    fetch(url, options)
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

}

//this is to use another weather API on different tutorial.  Decided not
//to use this tutorial.  
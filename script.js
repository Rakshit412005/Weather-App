const url = 'http://api.weatherapi.com/v1/current.json?key=5ebbc27a8439431e9f662525240408&q=bijnor&aqi=no';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a375f6af9cmsh6725ae1ca15047fp17b300jsnbcbc8044bda3',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
async function fetchData(city) {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
     
    

} catch (error) {
	console.error(error);
}
}

fetchData();

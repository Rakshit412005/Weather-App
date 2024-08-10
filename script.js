const name= document.querySelector("#name");
const temp_c = document.querySelector("#temp_c");
const humidity=document.querySelectorAll("#humidity");
const temp_f = document.querySelector("#temp_f");
const is_day = document.querySelector("#is_day");
const localtime = document.querySelector("#localtime");
const heatindex_c = document.querySelector("#heatindex_c");
const wind_kph = document.querySelector("#wind_kph");
const last_updated= document.querySelector("#last_updated");
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a375f6af9cmsh6725ae1ca15047fp17b300jsnbcbc8044bda3',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
fetch('http://api.weatherapi.com/v1/current.json?key=5ebbc27a8439431e9f662525240408&q=london&aqi=no',options)
.then(response => response.json())
.then((response) => {console.log(response)
	
    name.innerHTML = response.location.name;
    localtime.innerHTML = response.location.localtime;
    heatindex_c.innerHTML = response.current.heatindex_c;
	temp_c.innerHTML = response.current.temp_c;
    wind_kph.innerHTML = response.current.wind_kph;
	last_updated.innerHTML = response.current.last_updated;
    // wind_degree.innerHTML = response.wind_degree;
    humidity.forEach((i) => i.innerHTML = response.current.humidity);
    temp_f.innerHTML = response.current.temp_f;
    // feelslike_c.innerHTML = response.feelslike_c;
    is_day.innerHTML = response.current.is_day;
} )
.catch(err => console.error(err));


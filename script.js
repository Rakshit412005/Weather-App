const name= document.querySelector("#name");
const temp_c = document.querySelector("#temp_c");
const humidity=document.querySelector("#humidity");
const temp_f = document.querySelector("#temp_f");
const is_day = document.querySelector("#is_day");
const localtime = document.querySelector("#localtime");
const heatindex_c = document.querySelector("#heatindex_c");
const wind_kph = document.querySelector("#wind_kph");
const last_updated= document.querySelector("#last_updated");
const feelslike_c= document.querySelector("#feelslike_c");
const dewpoint_c= document.querySelector("#dewpoint_c");
const wind_dir= document.querySelector("#wind_dir");
const wind_degree= document.querySelector("#wind_degree");
const status= document.querySelector("#status");
const condition= document.querySelector(".condition");
const submit = document.querySelector("#submit");
const  city= document.querySelector("#city");
const err=document.querySelector(".err");
const msg=document.querySelector(".msg");
const cards= document.querySelector(".cards");

const data = null;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a375f6af9cmsh6725ae1ca15047fp17b300jsnbcbc8044bda3',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	name.innerHTML=city;
	fetch('https://api.weatherapi.com/v1/current.json?key=5ebbc27a8439431e9f662525240408&q='+ city,options)
    .then(response => response.json())
    .then((response) => {
		console.log(response)
		if(response.error){
			err.classList.remove("hide");
			err.innerHTML=response.error.message;
			msg.classList.add("hide");
			cards.classList.add("hide");
			condition.classList.add("hide");
		}
		else{
			msg.classList.remove("hide");
			cards.classList.remove("hide");
			condition.classList.remove("hide");
			err.classList.add("hide");
		}
		
	
    name.innerHTML = response.location.name;
    localtime.innerHTML = response.location.localtime;
    heatindex_c.innerHTML = response.current.heatindex_c;
	temp_c.innerHTML = response.current.temp_c;
    wind_kph.innerHTML = response.current.wind_kph;
	last_updated.innerHTML = response.current.last_updated;
    wind_degree.innerHTML = response.current.wind_degree;
    humidity.innerHTML = response.current.humidity;
	wind_dir.innerHTML = response.current.wind_dir;
	dewpoint_c.innerHTML = response.current.dewpoint_c;
    temp_f.innerHTML = response.current.temp_f;
    feelslike_c.innerHTML = response.current.feelslike_c;
    is_day.innerHTML = response.current.is_day;
	status.innerHTML = response.current.condition.text;
	const conditionUrl = response.current.condition.icon;
	condition.style.backgroundImage= `url(${conditionUrl})`;

} )
.catch(err => console.error(err));
}
submit.addEventListener("click",(submit)=>{
	getWeather(city.value);
	submit.preventDefault();
})
getWeather("india");



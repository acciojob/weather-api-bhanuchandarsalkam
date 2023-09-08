//your JS code here. If required.
function get(){
	const url=`https://openweathermap.org/api`;
	fetch(url)
	.then((response)=>response.json())
	.then(data=>{
		document.getElementById("para").style.display=block;
		document.getElementById("weatherData").innerText=data;
	})
}
const button=document.getElementById("btn");
button.addEventListener("click",get);
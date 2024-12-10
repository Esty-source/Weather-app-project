    let weather = {
    "apiKey": "7b3bf4eb2c274adf5bb220f97828190f",
    fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)
    .then((response)=>response.json())
    .then((data)=>this.displayWeather(data)); 
    },
    displayWeather: function (data) { 
    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed}=data.wind;
    // console.log(name,description,icon,temp,humidity,speed);
    document.querySelector(".city").innerText="Weather in " + name;
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp + "°C";
    document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage="url('https://cdn.pixabay.com/photo/2023/05/14/19/42/sky-7993656_1280.jpg"+ name +")";
},
search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
    }
    };   

document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
        });
document.querySelector(".search-bar").addEventListener("keyup",function(event) {
        if (event.key=="Enter") {
        weather.search()
        }
        });
    weather.fetchWeather("Douala");

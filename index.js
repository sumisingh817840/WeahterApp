const btn = document.getElementById("btn");
const input = document.querySelector("input");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const tem = document.querySelector(".tem");
const desc = document.querySelector(".desc");
const names = document.querySelector(".name");
const country = document.querySelector(".country");
 



btn.addEventListener("click", ()=>{
    let city = input.value;
    getWeather(city);
})


function getWeather(city){
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c829aaad662fc5f8dad86062c3803300`)  
.then(res => res.json())
.then(data =>{
    console.log(data);
  
    
    // Name
    const tittle = data.name;
    const countryname = data.sys.country;
    country.innerHTML = `${tittle}, ${countryname}`;

     //icon
    const iconCode = data.weather[0].icon;
    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" alt="">`;

    //tem

     let weatherTem = data.main.temp;
     weatherTem = weatherTem - 273;
     const temperature = weatherTem.toFixed(1)
     tem.innerHTML = `${temperature}°C `;
    
     //Des
    const description = data.weather[0].description;
    desc.innerHTML= description;

});


}   





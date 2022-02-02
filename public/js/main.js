const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const datahide  =document.querySelector('.middle_layer');


const getInfo = (event) => {
    event.preventDefault();
  let cityVal = cityName.value;
if(cityVal === ""){
    city_name.innerText = 'Plz write the name before serach'
    datahide.classList.add('data_hide');

}else{
   try{
    let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ea23dce6f58ca07e4981d6f9112bc057`
    const response = await fetch(url);
    const data = await response.json();
   const arrData = [data]

   city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
   temp.innerText = arrData[0].main.temp;
   temp_status.innerText = arrData[0].weather[0].main;
   datahide.classList.remove('data_hide');
    
   }catch{
      city_name.innerText = 'Plz wirte the city name properly';
      datahide.classList.add('data_hide');
    }

    
}

    
}

submitBtn.addEventListener('click', getInfo);
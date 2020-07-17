import { API_URL, API_KEY, COUNTRY_URL } from './config.js';
import { byId, setImg } from './helpers.js';

const searchInput = document.getElementById('input');

const gettingWeather = () => {
   
    fetch(`${API_URL}/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        byId('city', data.name);
        byId('country', data.sys.country);
        byId('temp', Math.round(data.main.temp))
        setImg('CountryId', `${COUNTRY_URL}/${data.sys.country}/flat/64.png`);
        setImg('tempIcon', `${API_URL}/img/w/${data.weather[0].icon}.png`)
    })
    .catch(error => {
        console.log(error, 'catch')
    })
};

document.getElementById('searchButton').addEventListener('click', gettingWeather);

searchInput.addEventListener('keyup', e => {
    if(e.key === 'Enter') {
        gettingWeather()
    }
})
import axios from 'axios';

const API_KEY = 'dc6d0852ed918963362a350a6ba962b3';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

module.exports={
    getTemp: function(location){

        var encodedLocation = encodeURIComponent(location);
        var request = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation},us`;

        return axios.get(request).then(function(res){

            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else{
                return res.data.main.temp;
            }

        }, function(err){
            throw new Error(err.response.data.message);
        })
    }
}
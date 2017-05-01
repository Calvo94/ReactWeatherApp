var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://samples.openweathermap.org/data/2.5/weather?&appid=12afbc322a805aae21f3c44ce30b4f77';

//12afbc322a805aae21f3c44ce30b4f77

module.exports={
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      debugger;
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });

  }
}

var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleNewlocation:function(location){
    var that = this;


    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp:temp,
        isLoading:false
      });
    }, function (errorMessage) {
      that.setState({isLoading:false});
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading,location,temp}= this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if( temp && location){
        return <WeatherMessage temp ={temp} location={location}/>;
      }
    }

    temp = temp-273.15;
    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onNewlocation={this.handleNewlocation}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;

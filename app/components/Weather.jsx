import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

    getInitialState: function(){
        return{
            location: 'Miami',
            temp: 88
        }
    },

    handleSearch: function(location){
        var that = this;
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp
            });
        }, function(errorMessage){
            alert(errorMessage);
        });
    },
    render: function(){
        var {location, temp} = this.state;
        return(
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage location={location} temp={temp}/>
            </div>
            );
    }
});

export default Weather;
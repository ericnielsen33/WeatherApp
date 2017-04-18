import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

var Weather = React.createClass({

    getInitialState: function(){
        return{
            isLoading: false,
        }
    },

    handleSearch: function(location){
        var that = this;
        this.setState({isLoading: true});
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage){
            that.setState({
                 isLoading: false
            })
            alert(errorMessage);
        });
    },
    render: function(){

        var {isLoading, location, temp} = this.state;

        function renderMessage(){
            if (isLoading) {
                return <h3>...loading...</h3>;
            } if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return(
            <div>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
            );
    }
});

export default Weather;
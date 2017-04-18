import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({

    getInitialState: function(){
        return{
            location: 'Miami',
            temp: 88
        }
    },

    handleSearch: function(location){
        this.setState({
            location: location,
            temp: 23
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
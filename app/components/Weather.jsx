import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

var Weather = React.createClass({
    render: function(){
        return(
            <div>
                <WeatherForm />
                <WeatherMessage />
            </div>
            );
    }
});

export default Weather;
import React from 'react';

const WeatherMessage = ({location, temp}) => {
    return(
            <h3>The temperature in {location} is {temp} degrees.</h3>
            );
}

export default WeatherMessage;
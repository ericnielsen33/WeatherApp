import React from 'react';

const WeatherMessage = ({location, temp}) => {
    return(
            <h2 className="text-center">The temperature in {location} is {temp} degrees.</h2>
            );
}

export default WeatherMessage;
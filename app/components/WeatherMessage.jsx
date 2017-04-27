import React from 'react';
import {PropTypes} from 'prop-types';

const WeatherMessage = ({location, temp}) => {
    return(
            <h2 className="text-center">The temperature in {location} is {temp} degrees.</h2>
            );
}

WeatherMessage.propTypes = {
    location: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired
}

export default WeatherMessage;
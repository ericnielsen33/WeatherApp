import React from 'react';

var WeatherMessage = React.createClass({
    render: function(){
        var {location, temp} = this.props;
        return(
            <h3>
            The temperature in {location} is {temp} degrees.
            </h3>
            );
    }
});

export default WeatherMessage;
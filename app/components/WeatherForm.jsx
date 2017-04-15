import React from 'react';

var WeatherForm = React.createClass({
    render: function(){
        return(
             <div>
                <form>
                    <input placeholder="Enter city" type="text" ref="city" />
                     <p></p>
                    <button>
                        Get Weather
                    </button>
                </form>
            </div>
            );
    }
});

export default WeatherForm;
import React from 'react';

const About = (props) => {
     return(
            <div>
                <h1 className="text-center">About</h1>
                <dl>
                    <dt>Function</dt>
                    <dd>You can use this application to get current weather conditions in the US.</dd>
                    <dt>How to use it</dt>
                    <dd>Enter a city in the search bar to get the current temperature</dd>
                    <dt>Check it out on Github</dt>
                    <dd><a href="https://github.com/ericnielsen33/WeatherApp" rel="noopener noreferrer" target="_blank">The WeatherApp Github Repo</a></dd>
                </dl>
            </div>
            );
}

export default About;
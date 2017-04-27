import React, {Component} from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: undefined
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(location){
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: false
        });

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(e){
            that.setState({
                 isLoading: false,
                 errorMessage: e.message
            });
        });
    }

    render(){

        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage(){
            if (isLoading) {
                return <h3>...loading...</h3>;
            } if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError(){
            if (errorMessage) {
                return(
                    <div>
                        <ErrorModal message={errorMessage}/>
                    </div>
                    );
            }
        }

        return(
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
                {renderError()}
            </div>
            );
    }
}

export default Weather;
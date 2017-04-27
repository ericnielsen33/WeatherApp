import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// import components to render

import About from 'About';
import Examples from 'Examples';
import Home from 'Home';
import Layout from 'Layout';
import Weather from 'Weather';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// load App.css
require('style-loader!css-loader!appCSS');
$(document).foundation();

class App extends Component {
  render() {
    return(
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Weather" component={Weather} />
              <Route path="/About" component={About} />
              <Route path="/Examples" component={Examples} />
            </Switch>
          </Layout>
        </Router>
      );
  }
}

ReactDOM.render(<App/>,
        document.getElementById('app')
        );
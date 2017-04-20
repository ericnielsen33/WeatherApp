import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// import components to render

import About from 'About';
import Examples from 'Examples';
import Main from 'Main';
import Nav from 'Nav';
import Weather from 'Weather';

// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/Weather" component={Weather} />
              <Route path="/About" component={About} />
              <Route path="/Examples" component={Examples} />
            </Switch>
          </div>
        </Router>,
        document.getElementById('app')
        );
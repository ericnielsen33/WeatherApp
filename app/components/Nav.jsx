import React from 'react';
import {NavLink} from 'react-router-dom';

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Home Component</NavLink>
                <NavLink to="/Weather" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Weather Component</NavLink>
                <NavLink to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>About Component</NavLink>
                <NavLink to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples Component</NavLink>
            </div>
            );
    }
});

export default Nav;
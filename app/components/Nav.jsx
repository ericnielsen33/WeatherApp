import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends Component {

    onSearch(e){
        e.preventDefault();
        alert('Not yet wired up');
    }

    render(props){
         return(
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                         <li className="menu-text">React Weather App</li>
                        <li>
                            <NavLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Home</NavLink>
                        </li>
                        <li>
                             <NavLink to="/Weather" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Weather</NavLink>
                        </li>
                        <li>
                             <NavLink to="/About" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>Examples</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search by city" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Nav;

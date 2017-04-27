import React from 'react';
import {NavLink} from 'react-router-dom';

const Examples = (props) => {
    return(
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out.</p>
            <ul>
                <li>
                    <NavLink to="?location=Indianapolis">Indianapolis, IN</NavLink>
                </li>
                <li>
                    <NavLink to="?location=Bloomington">Bloomington, IN</NavLink>
                </li>
                <li>
                    <NavLink to="?location=Denver">Denver, CO</NavLink>
                </li>
            </ul>
        </div>
            );
}

export default Examples;
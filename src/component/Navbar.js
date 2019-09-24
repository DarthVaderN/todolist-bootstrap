import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className= "navbar-brand">
        To DO
        </div>
        
        <div className ="navbar-brand">
            <ul className="navbar-nav">
                <li className = "navbar-item">
                    <NavLink className = "nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className = "navbar-item">
                    <NavLink className = "nav-link" to="/about">About</NavLink>
                </li>

            </ul>
        </div>
    </nav>
)
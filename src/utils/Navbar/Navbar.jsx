import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="left-navbar">
            <ul className='navbar'>
                <NavItem to="/seeds" currentPath={location.pathname}>Seeds</NavItem>
                <NavItem to="/weather-forecast" currentPath={location.pathname}>Weather Forecast</NavItem>
                <NavItem to="/plant-nutrition" currentPath={location.pathname}>Plant Nutrition</NavItem>
                <NavItem to="/kisan-care" currentPath={location.pathname}>Kisan Care</NavItem>
            </ul>
        </div>
    );
};

const NavItem = ({ to, currentPath, children }) => {
    const isActive = to === currentPath;
    return (
        <li className={`border ${isActive ? 'active' : ''}`}>
            <Link to={to}>{children}</Link>
        </li>
    );
};

export default Navbar;

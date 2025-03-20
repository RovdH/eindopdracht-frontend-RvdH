import React from 'react';
import { NavLink } from 'react-router-dom';

export const renderNavLinks = (routes) => {
    return routes.map((route, index) => (
        <li key={index}>
            <NavLink
                to={route.path}
                className={({ isActive }) => (isActive ? 'active' : '')} // Updated active link handling
            >
                {route.label}
            </NavLink>
        </li>
    ));
};

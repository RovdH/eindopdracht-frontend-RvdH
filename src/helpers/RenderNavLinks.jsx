import React from 'react';
import {NavLink} from 'react-router-dom';

export const renderNavLinks = (routes) => {
    return routes
        .filter((route) => route.inNav)
        .map((route, index) => (
            <li key={index}>
                <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                >
                    {route.label}
                </NavLink>
            </li>
        ));
};

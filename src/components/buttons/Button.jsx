import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Button.module.css';

function Button({variant, size, to, onClick, children}) {

    const classNames = `${styles.button} ${styles[variant]} ${styles[size]}`;

    if (to) {
        return <Link to={to} className={classNames}>{children}</Link>;
    }
    return <button className={classNames} onClick={onClick}>{children}</button>;
}

export default Button;


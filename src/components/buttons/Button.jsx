import React from 'react';
import styles from './Button.module.css';

function Button({ variant, size, onClick, children }) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;

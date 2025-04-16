import React from 'react';
import styles from './Toggle.module.css';

const Toggle = ({ isOn, onToggle, labelLeft ="OFF", labelRight ="ON" }) => {
    return (
        <div className={styles.toggle__wrapper} onClick={onToggle}>
            <span className={styles.toggle__label}>{labelLeft}</span>
            <div className={`${styles.toggle__slider} ${isOn ? styles.on : styles.off}`}>
                <div className={styles.toggle__circle}></div>
            </div>
            <span className={styles.toggle__label}>{labelRight}</span>
        </div>
    );
};

export default Toggle;

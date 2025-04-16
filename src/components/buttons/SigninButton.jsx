import React from 'react';
import styles from './Button.module.css';

const SignInButton = ({ isLoading, disabled, isAuth, handleAuth, variant = 'btn_darkgreen' }) => {
    return (
        <button type="submit"
                disabled={disabled}
                onClick={handleAuth}
                className={`${styles.button} ${styles[variant]}`}
        >
            {isLoading ? 'Loading...' : isAuth ? 'Sign Out' : 'Sign In'}
        </button>
    );
};
export default SignInButton
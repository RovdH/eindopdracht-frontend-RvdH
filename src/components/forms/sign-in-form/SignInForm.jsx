import React, { useContext, useState } from 'react';
import styles from './SignInForm.module.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from "../../context/auth/AuthContext.jsx";
import SignInButton from "../../buttons/SigninButton.jsx";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
    const { signin } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }
        setIsLoading(true);
        try {
            const response = await fetch('YOUR_BACKEND_LOGIN_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                signin(data.token);
                navigate('/profile');
            } else {
                setErrorMessage(data.message || 'Failed to sign in. Please check your credentials.');
            }
        } catch (err) {
            console.error("Login error:", err);
            setErrorMessage('An error occurred while signing in. Try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.signin__wrapper}>
            <form onSubmit={handleSubmit} className={styles.signin__form}>
                <fieldset className={styles.signin__form_fieldset}>

                    <label htmlFor="email" className={styles.signin__label}>E-mail
                        <FaEnvelope className={styles.signin__email_icon} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleChange}
                            className={styles.email_input}
                            required
                        />
                    </label>

                    <label htmlFor="password" className={styles.signin__label}>Password
                        <FaLock className={styles.signin__password_icon} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handleChange}
                            className={styles.password_input}
                            required
                        />
                    </label>
                    <SignInButton disabled={!email || !password || isLoading} variant={"btn_darkgray"}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </SignInButton>
                </fieldset>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </form>

            {isLoading && <div className={styles.loader}>Loading...</div>}
        </section>
    );
}

export default SignInForm;

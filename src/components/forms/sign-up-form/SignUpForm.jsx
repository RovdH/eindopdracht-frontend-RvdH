import React, {useState} from 'react';
import styles from '../sign-in-form/SignInForm.module.css';
import {FaEnvelope, FaLock, FaUser} from 'react-icons/fa';
import SignInButton from "../../buttons/SigninButton.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!email.includes('@')) return "Email has to contain a @.";
        if (username.length < 6) return "Username must contain at least 6 characters.";
        if (password.length < 6) return "Password must contain at least 6 characters.";
        return null;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        const validationError = validateInputs();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        try {
            await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                username,
                email,
                password,
                role: ["user"]
            });

            setSuccessMessage("You signed up successfully.");
            await new Promise(res => setTimeout(res, 2000));
            navigate("/sign-in");


        } catch (e) {
            if (e.response && e.response.data && e.response.data.message) {
                setErrorMessage(e.response.data.message);
            } else {
                setErrorMessage("Something went wrong, try again or with different credentials.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.signin__wrapper}>
            <form onSubmit={handleSignUp} className={styles.signin__form}>
                <fieldset className={styles.signin__form_fieldset}>
                    <label htmlFor="username" className={styles.signin__label}>Username
                        <FaUser className={styles.signin__email_icon}/>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.email_input}
                            required
                        />
                    </label>

                    <label htmlFor="email" className={styles.signin__label}>E-mail
                        <FaEnvelope className={styles.signin__email_icon}/>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.email_input}
                            required
                        />
                    </label>

                    <label htmlFor="password" className={styles.signin__label}>Password
                        <FaLock className={styles.signin__password_icon}/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.password_input}
                            required
                        />
                    </label>

                    <SignInButton disabled={isLoading} variant={"btn_darkgray"}>
                        {isLoading ? 'Loading...' : 'Registered'}
                    </SignInButton>
                </fieldset>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            </form>
        </section>
    );
};

export default SignUpForm;

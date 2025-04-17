import React, {useState} from 'react';
import styles from './SignUpForm.module.css';
import {FaEnvelope, FaLock, FaUser} from 'react-icons/fa';
import SignInButton from "../../buttons/SigninButton.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!email.includes('@')) return "Email has to contain a @.";
        if (username.length < 6) return "Username must contain at least 6 characters.";
        if (password.length < 6) return "Password must contain at least 6 characters.";
        if (password !== confirmPassword) return "Passwords do not match.";
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
        <section className={styles.signup__wrapper}>
            <form onSubmit={handleSignUp}>
                <fieldset>
                    <label htmlFor="username">Username
                        <FaUser className={styles.signup__email_icon}/>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.email_input}
                            autoComplete="off"
                            required
                        />
                    </label>

                    <label htmlFor={"email"}>E-mail
                        <FaEnvelope className={styles.signup__email_icon}/>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.email_input}
                            autoComplete="off"
                            required
                        />
                    </label>

                    <label htmlFor={"password"}>Password
                        <FaLock className={styles.signup__password_icon}/>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.password_input}
                            autoComplete="off"
                            required
                        />
                    </label>
                    <label htmlFor={"confirmpassword"}>Confirm Password
                        <FaLock className={styles.signup__password_icon}/>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmpassword"
                            placeholder="Re-enter Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={styles.password_input}
                            autoComplete="off"
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

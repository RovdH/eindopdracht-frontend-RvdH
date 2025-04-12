import React, { useContext, useState } from 'react';
import styles from './SignInForm.module.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from "../../context/auth/AuthContext.jsx";
import SignInButton from "../../buttons/SigninButton.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignInForm = () => {
    const { signin } = useContext(AuthContext);
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleSignin = async (e) => {
        e.preventDefault();
        if (!username) {
            setErrorMessage('Please enter your username.');
            return;
        }

        if (!password) {
            setErrorMessage('Please enter your password.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {username, password});
            if (response.status === 200) {
                signin(response.data.accessToken);
                setSuccessMessage("You signed in successfully.");
                await new Promise(res => setTimeout(res, 2000));
                navigate("/profile");

            }
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage('An error occurred while signing in. Try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.signin__wrapper}>
            <form onSubmit={handleSignin} className={styles.signin__form}>
                <fieldset className={styles.signin__form_fieldset}>

                    <label htmlFor="username" className={styles.signin__label}>Username
                        <FaEnvelope className={styles.signin__email_icon} />
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.email_input}
                            autoComplete="off"
                            required
                        />
                    </label>

                    <label htmlFor="password" className={styles.signin__label}>Password
                        <FaLock className={styles.signin__password_icon} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            className={styles.password_input}
                            autoComplete="off"
                            required
                        />
                    </label>
                    <SignInButton disabled={!username || !password || isLoading} variant={"btn_darkgray"}>
                        {isLoading ? 'Loading...' : 'Submitted'}
                    </SignInButton>
                    {successMessage && (<p>{successMessage}</p>)}
                </fieldset>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
            </form>

            {isLoading && <div className={styles.loader}>Loading...</div>}
        </section>
    );
}

export default SignInForm;

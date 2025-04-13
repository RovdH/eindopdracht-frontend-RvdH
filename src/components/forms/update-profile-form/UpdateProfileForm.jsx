import React, { useState } from 'react';
import axios from 'axios';
import Button from "../../buttons/Button.jsx";
import styles from '../sign-in-form/SignInForm.module.css';
import {FaEnvelope, FaLock} from "react-icons/fa";

const UpdateProfileForm = ({ currentUser, onProfileUpdate }) => {
    const [email, setEmail] = useState(currentUser.email || '');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const validateInputs = () => {
        if (email && !email.includes('@')) return "Email has to contain a @.";
        if (password && password.length < 6) return "Password must contain at least 6 characters.";
        return null;
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const validationError = validateInputs();
        if (validationError) {
            setErrorMessage(validationError);
            return;
        }

        setIsLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const updateData = {};
        if (email) updateData.email = email;
        if (password) updateData.password = password;

        try {
            const response = await axios.put(
                "https://frontend-educational-backend.herokuapp.com/api/user",
                updateData,
                {
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            setSuccessMessage("You have successfully updated your profile.");
            onProfileUpdate(response.data);

            setEmail('');
            setPassword('');
        } catch (e) {
            setErrorMessage(e.response?.data?.message || "Something went wrong, try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={styles.signin__wrapper}>
            <form onSubmit={handleUpdateProfile} className={styles.signin__form}>
                <fieldset className={styles.signin__form_fieldset}>
                    <label htmlFor="email" className={styles.signin__label}>E-mail
                        <FaEnvelope className={styles.signin__email_icon}/>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.email_input}
                        />
                    </label>

                    <label htmlFor="password" className={styles.signin__label}>Password
                        <FaLock className={styles.signin__password_icon}/>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.password_input}
                        />
                    </label>

                    <Button variant={"btn_darkgreen"} disabled={isLoading}>
                        {isLoading ? 'Updating...' : 'Update Profile'}
                    </Button>
                </fieldset>

                {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
            </form>
        </section>
    );
};

export default UpdateProfileForm;

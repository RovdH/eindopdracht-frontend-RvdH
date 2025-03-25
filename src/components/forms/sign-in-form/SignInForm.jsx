import styles from './SignInForm.module.css';
import React, { useState } from 'react';
import {FaEnvelope} from "react-icons/fa";
import Button from "../../buttons/Button.jsx";
import EmailField from "../controlled-fields/EmailField.jsx";

function SignInForm() {
    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleEmailChange = () => {
        setEmail(email);
    };

    const handleValidationChange = (isValid) => {
        setIsFormValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // LOGIC voor als formulier geldig is en door kan.
        } else {
            console.error('Form is invalid');
        }
    };
    return (
        <section className={styles.signin__wrapper}>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h5>Subscribe for food inspiration</h5></legend>
                    <label htmlFor="email">
                        <FaEnvelope className={styles.signin__email_icon}/>
                        <EmailField
                            label="Your Email"
                            successMessage="That looks right"
                            errorMessage="Keep typing, let's make it a correct email address"
                            onChange={handleEmailChange}
                            onValidationChange={handleValidationChange}
                        />
                        <button type="submit" disabled={!isFormValid}>
                            Submit
                        </button>
                    </label>
                </fieldset>
            </form>
        </section>
    );
}

export default SignInForm;

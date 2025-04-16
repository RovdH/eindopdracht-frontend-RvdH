import styles from './EmailOptin.module.css';
import React, { useState } from 'react';
import SubmitButtonSmall from "../../buttons/SubmitButtonSmall.jsx";
import {FaEnvelope} from "react-icons/fa";
import {Link} from "react-router-dom";

const EmailOptIn = () => {
    const [emailValue, setEmailValue] = useState('');
    const [privacyStatementValue, togglePrivacyStatementValue] = useState(false);
    const [notificationValue, setNotificationValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /\S+@\S+\.\S+/;

        if (!emailRegex.test(emailValue)) {
            setIsSuccess(false);
            setNotificationValue('Please enter a valid email address.');
        } else {
            setIsSuccess(true);
            setNotificationValue('Yum Yum, You are added to our DEMO mailing list.');
        }
    };

    return (
        <section className={styles.email__optin_wrapper}>
            <form onSubmit={handleSubmit} noValidate>
                <fieldset>
                    <legend><h5>Subscribe for food inspiration</h5></legend>
                    <label>
                        <FaEnvelope className={styles.email__optin_icon}/> <input
                            type="email"
                            id="id-email-input"
                            name="email-input"
                            value={emailValue}
                            placeholder="    Enter your e-mail"
                            onChange={(e) => setEmailValue(e.target.value)}
                            className={styles.email_input}
                        />
                        <SubmitButtonSmall onClick={handleSubmit} disabled={!privacyStatementValue} />
                    </label>
                    <div className={styles.checkbox__wrapper}>
                        <label htmlFor="email-optin-form-checkbox">
                            <input
                                type="checkbox"
                                id="email-optin-form-checkbox"
                                name="e-mail-opt-in-checkbox"
                                checked={privacyStatementValue}
                                onChange={() => togglePrivacyStatementValue(!privacyStatementValue)}
                            />
                            I have read the <Link to={"/privacy-statement"} className={styles.privacy_statement__link}>privacy statement</Link>.
                        </label>
                    </div>
                </fieldset>

                {notificationValue && (
                    <section
                        className={`${styles.notificationValue} ${isSuccess ? styles.notificationSuccess : styles.notificationError}`}>
                        <p>{notificationValue}</p>
                    </section>
                )}
            </form>
        </section>
    );
}

export default EmailOptIn;

import React, { useState } from 'react';

const EmailField = ({ label, successMessage, errorMessage, onChange, onValidationChange, ...props }) => {
    const [emailValue, setEmailValue] = useState('');
    const [notificationValue, setNotificationValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmailValue(value);

        if (onChange) {
            onChange(value);
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(value)) {
            setIsSuccess(true);
            setNotificationValue(successMessage || 'Success, lets dig in.');
        } else {
            setIsSuccess(false);
            setNotificationValue(errorMessage || 'Please enter a valid email address.');
        }

        if (onValidationChange) {
            onValidationChange(isSuccess);
        }
    };

    return (
        <div {...props}>
            <label>
                {label || 'Email Address'}
                <input
                    type="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
            </label>
            {notificationValue && (
                <div style={{ color: isSuccess ? 'green' : 'red' }}>
                    {notificationValue}
                </div>
            )}
        </div>
    );
};

export default EmailField;

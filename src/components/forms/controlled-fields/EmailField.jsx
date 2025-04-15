import React, {useState} from 'react';

const EmailField = ({successMessage, errorMessage, onChange, onValidationChange, ...props}) => {
    const [emailValue, setEmailValue] = useState('');
    const [notificationValue, setNotificationValue] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmailValue(value);

        if (onChange) {
            onChange(e);
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
        <form>
            <label>
                <input
                    name="name"
                    type="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    className={props.className}
                    placeholder="Enter your E-mail"
                />
            </label>
            {notificationValue && (
                <div style={{color: isSuccess ? 'green' : 'red'}}>
                    {notificationValue}
                </div>
            )}
        </form>
    );
};

export default EmailField;

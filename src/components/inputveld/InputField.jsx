import PropTypes from 'prop-types';
import styles from './InputField.module.css'; // Assuming the styles are scoped in the CSS module

const InputField = ({ type, placeholder, icon: Icon }) => {
    return (
        <div className={styles.inputWrapper}>
            {Icon && <Icon className={styles.inputIcon} />}
            <input
                type={type}
                placeholder={placeholder}
                className={styles.inputField}
            />
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.elementType, // For any react icon component
};

// InputField.defaultProps = {
//     icon: FaEnvelope, // Default icon if no icon is provided
// };

export default InputField;

import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styles from './SubmitButtonSmall.module.css';

function SubmitButtonSmall({ disabled }) {
    return (
        <button
            type="submit"
            className={styles.submit__btn_small}
            disabled={disabled}
        >
            <FaPaperPlane size={18} />
        </button>
    );
}

export default SubmitButtonSmall;

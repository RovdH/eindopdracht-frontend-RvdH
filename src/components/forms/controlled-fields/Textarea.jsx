import styles from "./Textarea.module.css";

export default function Textarea({name, placeholder, value, onChange}) {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.textarea_field}
        />
    );
}

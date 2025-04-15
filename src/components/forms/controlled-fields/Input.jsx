import styles from "./Input.module.css";

export default function Input({type = "text", name, placeholder, value, onChange}) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={styles.input_field}
        />
    );
}

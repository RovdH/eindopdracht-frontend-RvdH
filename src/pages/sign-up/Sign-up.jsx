import styles from './Sign-up.module.css';
import {useState} from "react";


function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("", email, password, username);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <h1 className={styles.h1signup}> Sign Up </h1>
    )
}
export default SignUp
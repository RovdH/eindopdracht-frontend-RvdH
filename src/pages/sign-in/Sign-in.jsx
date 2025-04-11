import styles from './Sign-in.module.css';
import SignInForm from "../../components/forms/sign-in-form/SignInForm.jsx";
import BordKip from "/src/assets/images/image-3-bord-met-kip-kfc-bruddah.png?react";
import Kipsalade from "/src/assets/images/image (2).png?react";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../../components/context/auth/AuthContext.jsx";
import axios from "axios";

function SignIn() {

    const {signin} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("URI", {email, password});
            if (response.status === 200) {
                signin(response.data.accessToken);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className={styles.signin__wrapper}>
            <article className={styles.signin__mobile_header}><img src={Kipsalade} alt="Kipsalade"
                                                                   className={styles.signin__mobimg}/></article>
            <article className={styles.signin__content}>
                <div className={styles.signin__mobile_heading}>
                    <blockquote className={styles.signin__quote}>YOUR RECIPES ON THE GO</blockquote>
                    <h1 className={styles.signin__title}>Sign In</h1></div>
                <SignInForm/>
                <p className={styles.signin__text}>Don’t have an account? <Link to="/sign-up"
                                                                                className={styles.signin__link}>Create
                    Now</Link></p>
            </article>
            <article className={styles.signin__visual}><img src={BordKip} alt="BordKip"
                                                            className={styles.signin__deskimg}/></article>
        </section>
    )
}

export default SignIn
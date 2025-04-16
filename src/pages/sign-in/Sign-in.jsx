import styles from './Sign-in.module.css';
import SignInForm from "../../components/forms/sign-in-form/SignInForm.jsx";
import BordKip from "/src/assets/images/image-3-bord-met-kip-kfc-bruddah.png?react";
import Kipsalade from "/src/assets/images/image (2).png?react";
import {Link} from "react-router-dom";

function SignIn() {

    return (
        <main className={styles.signin__wrapper}>
            <section className={styles.signin__mobile_header}><img src={Kipsalade} alt="Kipsalade"
                                                                   className={styles.signin__mobimg}/></section>
            <article className={styles.signin__content}>
                <div className={styles.signin__mobile_heading}>
                    <blockquote className={styles.signin__quote}>YOUR RECIPES ON THE GO</blockquote>
                    <h1 className={styles.signin__title}>Sign In</h1></div>
                <SignInForm/>
                <p className={styles.signin__text}>Don’t have an account? <Link to="/sign-up"
                                                                                className={styles.signin__link}>Create
                    Now</Link></p>
            </article>
            <section className={styles.signin__visual}>
                <img src={BordKip} alt="BordKip" className={styles.signin__deskimg}/>
            </section>
        </main>
    )
}

export default SignIn
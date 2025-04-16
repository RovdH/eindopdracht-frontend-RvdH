import styles from './Sign-up.module.css';
import Kipsalade from "../../assets/images/image (2).png";
import {Link} from "react-router-dom";
import BordKip from "../../assets/images/image-3-bord-met-kip-kfc-bruddah.png";
import SignUpForm from "../../components/forms/sign-up-form/SignUpForm.jsx";


function SignUp() {

    return (
        <main className={styles.signin__wrapper}>
            <section className={styles.signin__mobile_header}><img src={Kipsalade} alt="Kipsalade"
                                                                   className={styles.signin__mobimg}/></section>
            <article className={styles.signin__content}>
                <div className={styles.signin__mobile_heading}>
                    <blockquote className={styles.signin__quote}>YOUR RECIPES ON THE GO</blockquote>
                    <h1 className={styles.signin__title}>Sign UP</h1></div>
                <SignUpForm/>
                <p className={styles.signin__text}>Already have an account? <Link to="/sign-in"
                                                                                className={styles.signin__link}>Sign in!</Link></p>
            </article>
            <section className={styles.signin__visual}><img src={BordKip} alt="BordKip"
                                                            className={styles.signin__deskimg}/></section>
        </main>
    )
}
export default SignUp
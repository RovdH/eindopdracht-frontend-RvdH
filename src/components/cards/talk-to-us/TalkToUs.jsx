import {FaEnvelope, FaPhone} from "react-icons/fa";
import styles from './TalkToUs.module.css';

export const TalkToUs = () => {
    return (
        <section className={styles.talkto_us_wrapper}>
            <h3 className={styles.talkto_us_h3}>Talk To Us</h3>
            <article className={styles.talkto_us_email}>
                <h4 className={styles.talkto_us_h4}><FaEnvelope className={styles.talkto_us_icon}/> E-mail</h4>
                <p>Lazychef@wearenotgoingtoreply.com</p>
            </article>

            <article className={styles.talkto_us_phone}>
                <h4 className={styles.talkto_us_h4}><FaPhone className={styles.talkto_us_icon}/> Phone</h4>
                <p>Call text or WhatsApp us on:<span className={styles.talkto_us_span}>+31 6 52252252</span></p>
            </article>
        </section>
    )
}
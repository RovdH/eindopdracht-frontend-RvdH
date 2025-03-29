import styles from './Footer.module.css';
import {routes} from "../../../routes/routes.jsx";
import {renderNavLinks} from "../../../helpers/RenderNavLinks.jsx";
import EmailOptin from "../../forms/email-opt-in/EmailOptin.jsx";

function Footer() {
    return (
        <footer className={styles.footer}>
            <section className={styles.footer__inner_wrapper}>
                <nav>
                    <h5>Usefull links</h5>
                    <ul>
                        {renderNavLinks(routes)}
                    </ul>
                </nav>
                        <address className={styles.footer__contact}>
                        <h5>LazyChef</h5>
                        <p>
                            <span>Novi Hogeschool</span>
                            <span>Newtonlaan 247, 3584BH Utrecht</span>
                            <span>030-3073200 - <a href="mailto:contact@novi.nl>contact@novi.nl">Contact@novi.nl</a></span>
                        </p>
                    </address>
                <div className={styles.footer__email_optin}><EmailOptin/></div>
            </section>
        </footer>

    )
}

export default Footer
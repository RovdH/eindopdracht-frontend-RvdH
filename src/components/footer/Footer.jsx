import styles from './Footer.module.css';
import {routes} from "../../routes/routes.jsx";
import {renderNavLinks} from "../../helpers/renderNavLinks.jsx";

function Footer() {
    return (
        <footer className={styles.footer__outer_container}>
            <section className={styles.footer__inner_container}>
                <nav className={styles.footer__nav}>
                    <h3>Usefull links</h3>
                    <ul>
                        {renderNavLinks(routes)}
                    </ul>
                </nav>
                        <address className={styles.footer__contact}>
                        <h3>LazyChef</h3>
                        <p>
                            <span>Novi Hogeschool</span>
                            <span>Newtonlaan 247, 3584BH Utrecht</span>
                            <span>030-3073200 - <a href="mailto:contact@novi.nl>contact@novi.nl"></a></span>
                        </p>
                    </address>

                <div className={styles.footer__mailing}>
                    <h3>Subscribe for food inspiration</h3>
                    <input type="email" placeholder="Sign up for our mailing"/>
                </div>
            </section>
        </footer>

    )
}

export default Footer
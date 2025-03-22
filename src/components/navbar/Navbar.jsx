import styles from './Navbar.module.css';
import {renderNavLinks} from "../../helpers/renderNavLinks.jsx";
import {routes} from "../../routes/routes.jsx";
import LogoLazyChef from '/src/assets/logo/logo_lazychef.svg?react';

function Navbar() {
    return (
        <section className={styles.nav__menu_wrapper}>
            <LogoLazyChef className={styles.logo}/>
            <ul className={styles.nav__menu_list}>
                {renderNavLinks(routes)}
                <li>Sign Up</li>
                <li>Sign In</li>
            </ul>
        </section>

    )
}

export default Navbar
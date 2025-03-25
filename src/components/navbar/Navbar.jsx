import {useState} from "react";
import styles from './Navbar.module.css';
import {renderNavLinks} from "../../helpers/renderNavLinks.jsx";
import {routes} from "../../routes/routes.jsx";
import LogoLazyChef from '/src/assets/logo/logo_lazychef.svg?react';
import Button from "../buttons/Button.jsx";
import {IoClose, IoMenu} from "react-icons/io5";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <section className={styles.nav__menu_wrapper}>
            <div className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <IoClose size={30}/> : <IoMenu size={30}/>}
            </div>
            <LogoLazyChef className={styles.logo}/>
            <ul className={styles.nav__menu_list}>
                {renderNavLinks(routes)}
            </ul>
            <ul className={styles.nav__menu_btn}>
                <li><Button variant="btn_darkgreen" to="/sign-up">Sign Up</Button></li>
                <li><Button variant="btn_lightgreen" to="/sign-in">Sign In</Button></li>
            </ul>
            {menuOpen && (
                <div className={styles.mobile_menu}>
                    <ul>
                        {renderNavLinks(routes)}
                        <li><Button variant="btn_darkgreen" to="/sign-up">Sign Up</Button></li>
                        <li><Button variant="btn_lightgreen" to="/sign-in">Sign In</Button></li>
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Navbar
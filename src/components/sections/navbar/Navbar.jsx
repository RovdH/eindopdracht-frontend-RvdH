import {useContext, useState} from "react";
import styles from './Navbar.module.css';
import {renderNavLinks} from "../../../helpers/RenderNavLinks.jsx";
import {routes} from "../../../routes/routes.jsx";
import LogoLazyChef from '/src/assets/logo/logo_lazychef.svg?react';
import Button from "../../buttons/Button.jsx";
import {IoClose, IoMenu} from "react-icons/io5";
import {AuthContext} from "../../context/auth/AuthContext.jsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { signout, user } = useContext(AuthContext);

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
                {!user ? (
                    <>
                        <li><Button variant="btn_darkgreen" to="/sign-up">Sign Up</Button></li>
                        <li><Button variant="btn_lightgreen" to="/sign-in">Sign In</Button></li>
                    </>
                ) : (
                    <>
                    <li>Hi 👋 {user.username}<Button variant="btn_lightgreen" onClick={signout}>Sign Out</Button></li>
                </>
                    )}
            </ul>

            {menuOpen && (
                <div className={styles.mobile_menu}>
                    {!user ? (
                           <div><ul className={styles.mobile__menu_list}>
                                {renderNavLinks(routes)}
                                <li className={styles.mobile__li_button}><Button variant="btn_darkgreen" to="/sign-up">Sign Up</Button></li>
                                <li className={styles.mobile__li_button}><Button variant="btn_lightgreen" to="/sign-in">Sign In</Button></li>
                           </ul></div>
                        ) : (
                            <div><ul className={styles.mobile__menu_list}>
                                {renderNavLinks(routes)}
                                <li className={styles.mobile__li_button}>
                                 Hi 👋 {user.username}
                                <Button variant="btn_lightgreen" onClick={signout}>Sign Out</Button>
                            </li>
                            </ul></div>
                        )}
                </div>
            )}
        </section>
    )
}

export default Navbar
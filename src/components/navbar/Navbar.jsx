import styles from './Navbar.module.css';
import {renderNavLinks} from "../../helpers/renderNavLinks.jsx";
import {routes} from "../../routes/routes.jsx";


function Navbar() {
    return (
        <ul>
            {renderNavLinks(routes)}
        </ul>
    )
}

export default Navbar
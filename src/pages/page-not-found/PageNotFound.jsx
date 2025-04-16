import styles from './PageNotFound.module.css';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import Fridge from "../../assets/images/page-not-found-404-empty-fridge.jpg";
import Button from "../../components/buttons/Button.jsx";


function PageNotFound() {
    return (
        <>
            <header>
                <TitleBar/>
            </header>
            <main className={styles.page_not_found__wrapper}>
                <h3>Keep it cool, you opened an non existing page!</h3>
                <figure><img src={Fridge} className={styles.page_not_found__image} alt="404 Page not Found"/></figure>
                <p>Nothing to see here. Why don't you skip the empty fridge and head back to the homepage?</p>
                <Button variant={"btn_darkgreen"} to={"/"}>Click here! </Button>
            </main>
        </>
    )
}

export default PageNotFound
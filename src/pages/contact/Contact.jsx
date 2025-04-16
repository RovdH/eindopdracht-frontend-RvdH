import styles from './Contact.module.css';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import ContactForm from "../../components/forms/contact-form/ContactForm.jsx";
import {TalkToUs} from "../../components/cards/talk-to-us/TalkToUs.jsx";

function Contact() {
    return (
        <>
            <header>
                <TitleBar/>
            </header>
            <main className={styles.contact__input}><ContactForm/>
                <TalkToUs/>
            </main>
        </>
    )
}

export default Contact
import styles from './Contact.module.css';
import TitleBar from "../../components/sections/titlebar/TitleBar.jsx";
import ContactForm from "../../components/forms/contact-form/ContactForm.jsx";
import {TalkToUs} from "../../components/cards/talk-to-us/TalkToUs.jsx";

function Contact() {
    return (
        <>
            <header className={styles.contact__header}><TitleBar/></header>
            <main className={styles.contact__main}>
                <ContactForm/>
              <TalkToUs/>
            </main>
        </>
    )
}

export default Contact
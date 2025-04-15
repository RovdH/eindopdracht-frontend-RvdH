import React from 'react';
import styles from './TitleBar.module.css';
import {usePageTitle} from "../../../helpers/UsePageTitle.jsx";


const TitleBar = () => {
    const pageTitle = usePageTitle();

    return (
        <section className={styles.titlebar__wrapper}><h1 className={styles.titlebar__title}> {pageTitle} </h1>
        </section>
    )
}
export default TitleBar
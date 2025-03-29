import React from 'react';
import styles from './TitleBar.module.css';
import {usePageTitle} from "../../helpers/UsePageTitle.jsx";


function TitleBar() {
  const pageTitle = usePageTitle();

    return (
        <div className={styles.titlebar__wrapper}><h1 className={styles.titlebar__title}> {pageTitle} </h1>
        </div>
    )
}
export default TitleBar
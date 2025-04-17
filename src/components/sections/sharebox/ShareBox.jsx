import React from 'react';
import styles from './ShareBox.module.css';

const ShareBox = ({variant}) => {
    const pageUrl = encodeURIComponent(window.location.href);
    const message = encodeURIComponent("Check out this recipe!");

    const variantClass = `${styles.sharebox__title} ${styles[variant] || ''}`;

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
        whatsapp: `https://api.whatsapp.com/send?text=${message}%20${pageUrl}`,
    };

    return (
        <section className={styles.sharebox__wrapper}>
            <h5 className={variantClass}>Spread the Lazyness</h5>
            <article className={styles.sharebox__buttons}>
                <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className={styles.facebook}>
                    Facebook
                </a>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                    WhatsApp
                </a>
            </article>
        </section>
    );
};

export default ShareBox;

import React from 'react';
import styles from './BenefitItem.module.css'

const BenefitItem = ({title, text}) => {
    return (
        <div className={styles.main}>
            <div className={styles.contentContainer}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default BenefitItem;
import React from 'react';
import styles from './ReviewHandler.module.css'

const ReviewHandler = ({onLeftClick, onRightClick}) => {
    return (
        <div className={styles.main}>
            <div className={styles.buttonLeft} onClick={onLeftClick}>
                <div className={styles.arrowContainer}>
                    <div className={styles.leftArrow}/>
                </div>
            </div>
            <div className={styles.buttonRight} onClick={onRightClick}>
                <div className={styles.arrowContainer}>
                    <div className={styles.rightArrow}/>
                </div>
            </div>
        </div>
    );
};

export default ReviewHandler;
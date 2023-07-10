import React from 'react';
import styles from './ReviewsItem.module.css'
import firstImage from '../../../images/clients/1.jpeg'
import secondImage from '../../../images/clients/2.jpeg'
import thirdImage from '../../../images/clients/3.jpeg'
import {useEffect} from "react";

const imagesSrcs = [firstImage, secondImage, thirdImage];

const ReviewsItem = ({review}) => {

    useEffect(() => {
        imagesSrcs.forEach(image => {
            (new Image()).src = image;
        })
    }, []);

    const getImage = () => {
        if (review.id === 1) {
            return firstImage
        } else if (review.id === 2) {
            return secondImage
        } else {
            return thirdImage
        }
    }
    return (
        <div className={styles.main}>

            <div className={styles.leftSide}>
                <div className={styles.imageContainer}>
                    <img src={getImage()} className={styles.image}/>
                </div>
                <div className={styles.clientInfoContainer}>
                    <div className={styles.clientName}>{review.name}</div>
                    <div className={styles.operationType}>{review.type}</div>
                    <div className={styles.operationDate}>{review.date}</div>
                </div>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.starsArea}>
                    ★ ★ ★ ★ ★
                </div>
                <div className={styles.textArea}>
                    <span className={styles.text}>
                        {review.text}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default ReviewsItem;
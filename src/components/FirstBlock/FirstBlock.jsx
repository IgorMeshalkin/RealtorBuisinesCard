import React from 'react';
import styles from './FirstBlock.module.css'
import faceImg from '../../images/face.png'

const FirstBlock = () => {
    return (
        <div className={styles.background}>
            <div className={styles.textSide}>
                <div>
                    <span className={styles.regularText}>Здравствуйте, я </span>
                    <span className={styles.accentText}>Александр Перепёлкин</span>
                    <span className={styles.regularText}> - cпециалист по недвижимости c опытом более 20 лет</span>
                </div>
            </div>
            <div className={styles.photoSide}>
                <img src={faceImg} className={styles.faceImage}/>
            </div>
        </div>
    );
};

export default FirstBlock;
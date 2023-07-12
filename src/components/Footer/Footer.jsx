import React from 'react';
import styles from './Footer.module.css'
import magic from '../../images/magic.png'

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.nameContainer}>
                <div className={styles.name}>Александр Владимирович Перепёлкин</div>
                <div className={styles.position}>специалист по недвижимости</div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.contacts}>
                    <table>
                        <tbody>
                        <tr>
                            <td className={styles.contactName}>ЭЛЕКТРОННАЯ ПОЧТА:</td>
                            <td className={styles.contactValue}>aleksandr680848@gmail.com</td>
                        </tr>
                        <tr>
                            <td className={styles.contactName}>ТЕЛЕФОН:</td>
                            <td className={styles.contactValue}>+7 914 772 67 87</td>
                        </tr>
                        <tr>
                            <td className={styles.contactName}>РАСПОЛОЖЕНИЕ:</td>
                            <td className={styles.contactValue}>Хабаровск ул.Хабаровская 15В оф.414</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.magicContainer}>
                    <img src={magic} className={styles.magic}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
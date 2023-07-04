import React, {useState} from 'react';
import styles from './CallButton.module.css'
import phone from '../../images/phone.png'
import sms from '../../images/sms.png'
import whatsAppImg from '../../images/whatsapp.png'
import telegramImg from '../../images/telegram.png'
import {isMobile} from "../../utils/usefullFunctions";

const CallButton = () => {
    const [isActive, setIsActive] = useState(false);

    return (<div className={styles.container}>
        {isActive ?
            <div className={styles.appearsLeft}>
                {
                    isMobile() ?
                    <>
                        <a className={styles.callButton} href="tel:+79147726787" title={'Позвонить'}>
                            <img src={phone} className={styles.icon}/>
                        </a>
                        <a className={styles.callButton} href="sms:+79147726787" title={'Написать СМС'}>
                            <img src={sms} className={styles.icon}/>
                        </a>
                    </> :
                        <a className={styles.callButtonLong} title={'Номер телефона'}>
                            <img src={phone} className={styles.iconSmall}/>
                            <div className={styles.phoneNumber}>+7 914 772 67 87</div>
                        </a>
                }
                <a className={styles.callButton} title={'Написать в WhatsApp'} href="https://wa.me/+79147726787">
                    <img src={whatsAppImg} className={styles.icon}/>
                </a>
                <a className={styles.callButton} title={'Написать в Telegram'} href="https://t.me/yolkin27">
                    <img src={telegramImg} className={styles.icon}/>
                </a>
            </div> :
            <div className={styles.main}
                 onClick={() => setIsActive(true)}>
                <div className={styles.notActiveButton}>Связаться со мной</div>
            </div>
        }
    </div>);
};

export default CallButton;
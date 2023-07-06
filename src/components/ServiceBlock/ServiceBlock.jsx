import React from 'react';
import styles from './ServiceBlock.module.css'
import {getServices} from "../../utils/texts";
import ServiceItem from "./ServiceItem/ServiceItem";

const ServiceBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.smallInscription}>ЧТО Я ПРЕДЛАГАЮ</div>
            <div className={styles.bigInscription}>Услуги</div>
            <div className={styles.servicesPlace}>
                {
                    getServices().map(item =>
                        <ServiceItem
                            key={item.id}
                            service={item}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ServiceBlock;
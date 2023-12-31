import React from 'react';
import styles from './ServiceItem.module.css'
import {getIcon} from "../../../utils/usefullFunctions";
// import icon1 from '../../../images/serviceIcons/1.png'

const ServiceItem = ({service}) => {

    return (
        <div className={styles.main}>
            <div className={styles.contentContainer}>
                <div className={styles.iconContainer}>
                    <img src={getIcon(service)} className={styles.icon}/>
                </div>
                <div className={styles.serviceName}>
                    {service.name}
                </div>
                <div className={styles.serviceDescription}>
                    {service.description}
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
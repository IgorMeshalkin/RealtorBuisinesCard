import React from 'react';
import styles from './BenefitBlock.module.css'
import {getBenefitsText} from "../../utils/texts";
import BenefitItem from "./BenefitItem/BenefitItem";

const BenefitBlock = () => {
    return (
        <div className={styles.main}>
            <span
                className={styles.title}>Предоставляю полный спектр услуг - от оценки объекта до заключения сделки</span>
            <div className={styles.items}>
                {
                    getBenefitsText().map(item =>
                        <BenefitItem
                            key={item.title}
                            title={item.title}
                            text={item.text}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default BenefitBlock;
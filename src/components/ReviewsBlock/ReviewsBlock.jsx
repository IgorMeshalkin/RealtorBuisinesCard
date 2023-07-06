import React, {useEffect, useState} from 'react';
import styles from './ReviewsBlock.module.css'
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import {getReviewText} from "../../utils/texts";
import ReviewHandler from "./ReviewHandler/ReviewHandler";
import {getNextForLeftClick, getNextForRightClick, isMobile} from "../../utils/usefullFunctions";


const ReviewsBlock = () => {
    //состояния содержащие отзывы
    const [reviewsList, setReviewsList] = useState(getReviewText()) //список отзывов
    const [currentReview, setCurrentReview] = useState({}) //текущий отзыв

    //присваивает текущий отзыв под индексом 0, после получения списка отзывов.
    useEffect(() => {
        setCurrentReview(reviewsList[0])
    }, [reviewsList])

    //статус движения (анимации) отзыва, где: -1 влево; 0 на месте; 1 вправо.
    const [moveStatus, setMoveStatus] = useState(0)

    //функция анимации и замены текущего отзыва при перелистывании влево.
    const leftClick = () => {
        setMoveStatus(-1)
        setTimeout(() => {
            setCurrentReview(prevState => getNextForLeftClick(prevState, reviewsList));
        }, 400)
        setTimeout(() => {
            setMoveStatus(0)
        }, 800)
    }

    //функция анимации и замены текущего отзыва при перелистывании вправо.
    const rightClick = () => {
        setMoveStatus(1)
        setTimeout(() => {
            setCurrentReview(prevState => getNextForRightClick(prevState, reviewsList));
        }, 400)
        setTimeout(() => {
            setMoveStatus(0)
        }, 800)
    }

    //функция возвращающая тот или иной стиль, содержащий анимацию, в зависимости от moveStatus
    const getStyleClass = () => {
        if (moveStatus === -1) {
            return styles.leftMove
        } else if (moveStatus === 1) {
            return styles.rightMove
        } else {
            return ''
        }
    }

    //находится ли курсор на блоке с отзывом в настоящий момент
    const [isMouseOnReview, setIsMouseOnReview] = useState(false)

    //если курсор не на блоке с отзывом и страница открыта не с телефона, текущий отзыв меняется с заданным интервалом.
    useEffect(() => {
        if (!isMouseOnReview && !isMobile()) {
            const interval = setInterval(() => {
                    rightClick()
            }, 5000)
            return () => clearInterval(interval);
        }
    }, [isMouseOnReview])

    return (
        <div className={styles.main}
             onMouseEnter={() => setIsMouseOnReview(true)}
             onMouseLeave={() => setIsMouseOnReview(false)}
        >
            <div className={styles.smallInscription}>
                ЧТО ГОВОРЯТ КЛИЕНТЫ
            </div>
            <div className={styles.bigInscription}>
                Отзывы
            </div>
            <div className={styles.reviewContainer}>
                <div className={getStyleClass()}>
                    <ReviewsItem
                        review={currentReview}
                    />
                </div>

                <div className={styles.reviewHandlerContainer}>
                    <ReviewHandler
                        onLeftClick={leftClick}
                        onRightClick={rightClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default ReviewsBlock;
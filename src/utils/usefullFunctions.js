import icon1 from '../images/serviceIcons/1.png'
import icon2 from '../images/serviceIcons/2.png'
import icon3 from '../images/serviceIcons/3.png'
import icon4 from '../images/serviceIcons/4.png'
import icon5 from '../images/serviceIcons/5.png'
import icon6 from '../images/serviceIcons/6.png'
import icon7 from '../images/serviceIcons/7.png'

export const isMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
}

//функции для переключателя отзывов
export const getNextForLeftClick = (currentReview, reviewList) => {
    if (currentReview.id === 1) {
        return reviewList[reviewList.length - 1]
    } else {
        return reviewList[reviewList.indexOf(currentReview) - 1]
    }
}

export const getNextForRightClick = (currentReview, reviewList) => {
    if (currentReview.id === reviewList.length) {
        return reviewList[0]
    } else {
        return reviewList[reviewList.indexOf(currentReview) + 1]
    }
}

//функция для выбора иконки в блоке услуг
export const getIcon = (service) => {
    switch (service.id) {
        case 1:
            return icon1;
            break;
        case 2:
            return icon2;
            break;
        case 3:
            return icon3;
            break;
        case 4:
            return icon4;
            break;
        case 5:
            return icon5;
            break;
        case 6:
            return icon6;
            break;
        case 7:
            return icon7;
            break;

    }
}
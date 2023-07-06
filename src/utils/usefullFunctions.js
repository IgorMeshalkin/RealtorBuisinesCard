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
function slideRight(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate,
        easing: 'easeInOutQuad',
        duration: '1000',
    })
}

function slideLeft(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate,
        easing: 'easeInOutQuad',
        duration: '1000',
    })
}

function hideCards(idOne, idTwo) {
    anime({
        targets: idOne,
        opacity: 0,
        duration: '300'
    })
    anime({
        targets: idTwo,
        opacity: 0,
        duration: '300'
    })
}

function showInfo(infoId, delay) {
    anime({
        targets: infoId,
        height: ['0px', '400px'],
        delay: delay,
        easing: 'easeInOutQuad'
    })
}
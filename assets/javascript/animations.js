function slideRight(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate + 'px',
        easing: 'easeInOutQuad',
        duration: '1000',
    })
}

function slideLeft(id, xTranslate) {
    anime({
        targets: id,
        translateX: xTranslate + 'px',
        easing: 'easeInOutQuad',
        duration: '1000',
    })
}
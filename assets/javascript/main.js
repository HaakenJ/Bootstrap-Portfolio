$('#portfolio-link').on('click', () => {
    console.log('clicked');
    anime({
        targets: '#about-me-content',
        translateX: '1000px',
        easing: 'easeInOutQuad',
        duration: '1000'
    });
    anime({
        targets: '#portfolio-content',
        translateX: '1000px',
        easing: 'easeInOutQuad',
        delay: '1000',
        duration: '1000'
    });
})
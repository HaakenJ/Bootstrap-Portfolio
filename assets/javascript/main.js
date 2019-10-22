function swapActive(idFrom, idTo) {
    $('#' + idFrom).removeClass('active');
    $('#' + idTo).addClass('active');
}

$('#portfolio-link').on('click', () => {
    if ($('#about-me-link').hasClass('active')) {
        slideRight('#about-me-content', '5000');
        slideRight('#portfolio-content', '5000');
        swapActive('about-me-link', 'portfolio-link');

    } else if ($('#contact-link').hasClass('active')) {
        slideRight('#contact-content', '10000');
        slideRight('#portfolio-content', '5000');
        swapActive('contact-link', 'portfolio-link');
    }

});

$('#about-me-link').on('click', () => {

    if ($('#portfolio-link').hasClass('active')) {
        slideLeft('#portfolio-content', '-5000');
        slideLeft('#about-me-content', '0');
        swapActive('portfolio-link', 'about-me-link');
    } else if ($('#contact-link').hasClass('active')) {
        slideLeft('#contact-content', '-5000');
        slideLeft('#about-me-content', '0');
        swapActive('contact-link', 'about-me-link');
    }
});

$('#contact-link').on('click', () => {
    if ($('#about-me-link').hasClass('active')) {
        slideRight('#about-me-content', '5000');
        slideRight('#contact-content', '5000');
        swapActive('about-me-link', 'contact-link');
    } else if ($('#portfolio-link').hasClass('active')) {
        slideRight('#portfolio-content', '10000');
        slideRight('#contact-content', '5000');
        swapActive('portfolio-link', 'contact-link');
    }
})
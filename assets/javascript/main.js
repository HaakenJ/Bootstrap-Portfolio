function swapActive(idFrom, idTo) {
    $('#' + idFrom).removeClass('active');
    $('#' + idTo).addClass('active');
}

$('#portfolio-link').on('click', () => {

    $('[id*="card"]').show();
    $('[id*="card"]').css('opacity', '1');
    $('[id*="card"]').css('transform', 'none');
    $('[id*="info"]').hide();

    if ($('#about-me-link').hasClass('active')) {
        slideRight('#about-me-content', '5000px');
        slideRight('#portfolio-content', '5000px');
        swapActive('about-me-link', 'portfolio-link');

    } else if ($('#contact-link').hasClass('active')) {
        slideRight('#contact-content', '10000px');
        slideRight('#portfolio-content', '5000px');
        swapActive('contact-link', 'portfolio-link');
    }

});

$('#about-me-link').on('click', () => {

    if ($('#portfolio-link').hasClass('active')) {
        slideLeft('#portfolio-content', '-5000px');
        slideLeft('#about-me-content', '0px');
        swapActive('portfolio-link', 'about-me-link');
    } else if ($('#contact-link').hasClass('active')) {
        slideLeft('#contact-content', '-5000px');
        slideLeft('#about-me-content', '0px');
        swapActive('contact-link', 'about-me-link');
    }
});

$('#contact-link').on('click', () => {
    if ($('#about-me-link').hasClass('active')) {
        slideRight('#about-me-content', '5000px');
        slideRight('#contact-content', '5000px');
        swapActive('about-me-link', 'contact-link');
    } else if ($('#portfolio-link').hasClass('active')) {
        slideRight('#portfolio-content', '10000px');
        slideRight('#contact-content', '5000px');
        swapActive('portfolio-link', 'contact-link');
    }
})

$('#light-snow-card').on('click', () => {
    hideCards('#gif-wallet-card', '#train-times-card');
    // $('#light-snow-info').show();
})
$('#gif-wallet-card').on('click', () => {
    hideCards('#light-snow-card', '#train-times-card');
    slideLeft('#gif-wallet-card', '-330px');
    // $('#gif-wallet-info').show();
})
$('#train-times-card').on('click', () => {
    hideCards('#gif-wallet-card', '#light-snow-card');
    slideLeft('#train-times-card', '-660px');
    // $('#train-times-info').show();
})
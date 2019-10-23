function swapActive(idFrom, idTo) {
    $('#' + idFrom).removeClass('active');
    $('#' + idTo).addClass('active');
}

$(document).ready(() => {
    $('.opening-content').css({
        'height': innerHeight,
        'width': innerWidth
    });
});

// Opening page button.
$('#open-button').on('click', () => {
    slideUp('.opening-content');
})

// Navbar Clicks
$('#about-me-link').on('click', () => {

    $('#background').removeClass('active');
    $('#about-me').removeClass('active');
    $('#skills').addClass('active');
    $('#skills-info').show();

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
});
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


// About Me Clicks.
$('#skills').on('click', () => {
    $('#background').removeClass('active');
    $('#about-me').removeClass('active');
    $('#skills').addClass('active');

    hideInfo('#background-info');
    hideInfo('#about-me-info');
    showInfo('#skills-info');
})
$('#about-me').on('click', () => {
    $('#background').removeClass('active');
    $('#skills').removeClass('active');
    $('#about-me').addClass('active');

    hideInfo('#background-info');
    hideInfo('#skills-info');
    showInfo('#about-me-info');
})
$('#background').on('click', () => {
    $('#skills').removeClass('active');
    $('#about-me').removeClass('active');
    $('#background').addClass('active');

    hideInfo('#about-me-info');
    hideInfo('#skills-info');
    showInfo('#background-info');
})


// Portfolio clicks.
$('.portfolio-header').on('click', () => {
    $('[id*="card"]').show();
    $('[id*="card"]').css('opacity', '1');
    $('[id*="info"]').hide();
    if ($('#portfolio-content').css('top') === '-700px') {
        slideUpCards('#gif-wallet-card', 0);
        slideUpCards('#train-times-card', 0);
    } else {
        slideRight('#gif-wallet-card', 0);
        slideRight('#train-times-card', 0);
    }

})
$('#light-snow-card').on('click', () => {
    hideCards('#gif-wallet-card', '#train-times-card');
    $('#light-snow-info').show();
    showInfoPortfolio('#light-snow-info', 200, '398px');
})
$('#gif-wallet-card').on('click', () => {
    hideCards('#light-snow-card', '#train-times-card');
    // Switch statement used as media query.
    switch ($('#portfolio-content').css('top')) {
        // Above 1200px
        case '-545px':
            slideLeft('#gif-wallet-card', '-350px');
            showInfoPortfolio('#gif-wallet-info', 750, '398px');
            break;
            // Max 1199px
        case '-460px':
            slideLeft('#gif-wallet-card', '-330px');
            showInfoPortfolio('#gif-wallet-info', 750, '398px');
            break;
            // Max 991px
        case '-490px':
            slideLeft('#gif-wallet-card', '-225px');
            showInfoPortfolio('#gif-wallet-info', 750, '398px');
            break;
            // Max 768px
        case '-700px':
            slideUpCards('#gif-wallet-card', '-213px');
            showInfoPortfolio('#gif-wallet-info', 750, '398px');
            break;
    }

    $('#gif-wallet-info').show();

})
$('#train-times-card').on('click', () => {
    hideCards('#gif-wallet-card', '#light-snow-card');
    // Switch statement used as media query.
    switch ($('#portfolio-content').css('top')) {
        // Above 1200px
        case '-545px':
            slideLeft('#train-times-card', '-720px');
            showInfoPortfolio('#train-times-info', 800, '398px');
            break;
            // Max 1199px
        case '-460px':
            slideLeft('#train-times-card', '-637px');
            showInfoPortfolio('#train-times-info', 800, '398px');
            break;
            // Max 991px
        case '-490px':
            slideLeft('#train-times-card', '-450px');
            showInfoPortfolio('#train-times-info', 750, '398px');
            break;
            // Max 768px
        case '-700px':
            slideUpCards('#train-times-card', '-420px');
            showInfoPortfolio('#train-times-info', 750, '398px');
            break;

    }

    $('#train-times-info').show();

})
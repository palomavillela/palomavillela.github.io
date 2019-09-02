window.onload = function () {
    $(".slider").slick({
        accessibility: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        infinite: true,
        lazyLoad: 'progressive',
        mobileFirst: true,
        pauseOnDotsHover: true,
        pauseOnHover: false,
        responsive: [],
        slidesToScroll: 1,
        slidesToShow: 1
    });
};

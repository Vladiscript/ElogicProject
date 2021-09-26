define([
    'jquery',
    'slick',
    'domReady!'
], function ($) {


    $.widget('my.slider', {

        options: {
            selector: '',
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 3000,
            responsive: []
        },

        _create: function () {
            const slider = $(this.options.selector)

            slider.slick({
                dots: this.options.dots,
                infinite: this.options.infinite,
                speed: this.options.speed,
                slidesToShow: this.options.slidesToShow,
                slidesToScroll: this.options.slidesToScroll,
                arrows: this.options.arrows,
                prevArrow: '<div class="slick-prev">PREV</div>',
                nextArrow: '<div class="slick-next">NEXT</div>',
                autoplay: this.options.autoplay,
                autoplaySpeed: this.options.autoplaySpeed,
                responsive: this.options.responsive
            })
        }
    })

    return $.my.slider
});
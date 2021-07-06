$(document).ready(function() {
    "use strict";

// slide-item-one;
if($('.slide-item-one').length > 0) {
    $('.slide-item-one').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      });
    }


if($('.slider-item-two').length > 0) {
    $('.slider-item-two').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      });
    }
});
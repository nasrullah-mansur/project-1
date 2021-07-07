$(document).ready(function () {
    "use strict";

    $("#location-search").on("click", function () {
        $(this).next(".search-mega").toggle();
    });

    // Share;
    $(".share > i").on("click", function () {
        $(".share .share-links").toggleClass("active");
    });

    // slide-item-one;
    if ($(".slide-item-one").length > 0) {
        $(".slide-item-one").slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        });
    }

    if ($(".products-slide").length > 0) {
        $(".products-slide").slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        });
    }

    if ($(".is-sticky").length > 0) {
        $(".is-sticky").sticksy({
            topSpacing: 30,
        });
    }

    if ($("#agree").length > 0) {
        $("#agree").on("change", function () {
            $("#mail-preferences").slideToggle();
        });
    }

    if ($(".slider-item-two").length > 0) {
        $(".slider-item-two").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    }
});

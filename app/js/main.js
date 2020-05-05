$(function(){

    $('.reviews__slider-inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/multimedia-option.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrowsoutline.svg" alt=""></button>',
      });

    $('.partners__slider-inner').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/multimedia-option.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrowsoutline.svg" alt=""></button>',
    });

});





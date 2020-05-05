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

    $('.rate-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.rate-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.rate-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

});





$(function(){

    $('.reviews__slider-inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1141,
          settings: {
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
      ]
    });

    $('.partners__slider-inner').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1141,
          settings: {
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 681,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 471,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },
      ]
    });

    $('.rate-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.rate-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.rate-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.header__menu-btn').on('click', function(){
      $('.header__top-menu ul').slideToggle();
    });

});





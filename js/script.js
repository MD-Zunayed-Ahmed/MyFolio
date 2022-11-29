$(function () {
    'use strict';
    // fix menu part start
    let menuOff = $('.menu').offset().top;

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > menuOff) {
            $('.menu').addClass('fix_menu')
        } else {
            $('.menu').removeClass('fix_menu')
        }
    });
    // fix menu part end



    // back to top button start
    $(".bc_top").click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.bc_top').fadeIn();
        } else {
            $('.bc_top').fadeOut();
        }
    });
    // back to top button end
});
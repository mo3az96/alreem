$(document).ready(function () {
    var swiper
    window.onload = function () {

        swiper = new Swiper('#mainslider', {
            autoHeight: true,
            autoplay: false,
            speed: 1000,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    $('.menu-btn').click(function () {
        $('.xs-overlay').fadeIn(500);
        $('.side-bar').addClass('inscreen');
        $('.side-bar').removeClass('outscreen');
        $('.menu-btn').hide();
        $('body').css("overflow", "hidden");
    });

    $(".side-bar").click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $('.xs-overlay').fadeOut(500);
        $('.side-bar').addClass('outscreen');
        $('.side-bar').removeClass('inscreen');
        $('.menu-btn').show(200);
        $('body').css("overflow", "auto");
    });
    $('.side-close').click(function () {
        setTimeout(function () {
            if (typeof swiper !== 'undefined') {
                swiper.update();
            }
        }, 700);
        $(".site-body").toggleClass("fixer");
        $(".side-bar").toggleClass("side-fixer");
        $(".xs-overlay").toggleClass("side-fixer");
        $(".lang").toggleClass("lang-fixer");
        $(".card").toggleClass("display-fix");
        $(".logo").toggleClass("display-fix");
        $(".copyrights").toggleClass("display-fix");
        $(".social").toggleClass("display-flex-fix");
        $(".user-icon").toggleClass("display-flex-fix");
        $(".social a").toggleClass("margin-fix");
        $(".user-icon a").toggleClass("margin-fix");
        $(".user-icon span").toggleClass("margin-fix");
        $(this).toggleClass("side-close-fixer");
        $("#mainslider").show();
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    $('.search-btn').click(function () {
        if ($(".links").hasClass('menu-out')) {
            $(".links").removeClass("menu-out");
            $("#search").removeClass("search-in");
            $(".links").addClass("menu-in");
            $("#search").addClass("search-out");
        } else {
            $(".links").addClass("menu-out");
            $("#search").addClass("search-in");
            $(".links").removeClass("menu-in");
            $("#search").removeClass("search-out");
        }
        $(".site-body").removeClass("fixer");
        $(".side-bar").removeClass("side-fixer");
        $(".card").removeClass("display-fix");
        $(".logo").removeClass("display-fix");
        $(".copyrights").removeClass("display-fix");
        $(".social").removeClass("display-flex-fix");
        $(".user-icon").removeClass("display-flex-fix");
        $(".social a").removeClass("margin-fix");
        $(".user-icon a").removeClass("margin-fix");
        $(".user-icon span").removeClass("margin-fix");
        $(".side-close").removeClass("side-close-fixer");
    });

    $('#backbtn').click(function () {
        if ($(".links").hasClass('menu-out')) {
            $(".links").removeClass("menu-out");
            $("#search").removeClass("search-in");
            $(".links").addClass("menu-in");
            $("#search").addClass("search-out");
        } else {
            $(".links").addClass("menu-out");
            $("#search").addClass("search-in");
            $(".links").removeClass("menu-in");
            $("#search").removeClass("search-out");
        }
        $(".site-body").removeClass("fixer");
        $(".side-bar").removeClass("side-fixer");
        $(".card").removeClass("display-fix");
        $(".logo").removeClass("display-fix");
        $(".copyrights").removeClass("display-fix");
        $(".social").removeClass("display-flex-fix");
        $(".user-icon").removeClass("display-flex-fix");
        $(".social a").removeClass("margin-fix");
        $(".user-icon a").removeClass("margin-fix");
        $(".user-icon span").removeClass("margin-fix");
        $(".side-close").removeClass("side-close-fixer");
    });

    if ($(window).width() < 992) {
        $(".cats").addClass("panel");
        $('.xs-overlay').click(function () {
            $('.xs-overlay').fadeOut(500);
            $('.side-bar').addClass('outscreen');
            $('.side-bar').removeClass('inscreen');
            $('.menu-btn').show(200);
            $('body').css("overflow", "auto");
        });
    } else {
        $(".mega-product-btn").hover(function () {
            $(".our-products").addClass("cat-fix");
            $('.mega-product-btn a').css("color", "#d2a138");
            $('.mega-product-btn i').css("color", "#d2a138");

        }, function () {
            $(".our-products").removeClass("cat-fix");
            $('.mega-product-btn a').css("color", "#fff");
            $('.mega-product-btn i').css("color", "#5a54b0");
        });
        $(".our-products").hover(function () {
            $(".our-products").addClass("cat-fix");
            $('.mega-product-btn a').css("color", "#d2a138");
            $('.mega-product-btn i').css("color", "#d2a138");

        }, function () {
            $(".our-products").removeClass("cat-fix");
            $('.mega-product-btn a').css("color", "#fff");
            $('.mega-product-btn i').css("color", "#5a54b0");
        });
    }
});
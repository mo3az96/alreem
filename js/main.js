$(document).ready(function () {
    // Main Slider
    // $('.main-slider').owlCarousel({
    //     items: 1,
    //     autoplay: false,
    //     margin: 5,
    //     rtl: true,
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     responsive: {
    //         0: {

    //             dots: false,
    //         },
    //         500: {

    //             dots: false,

    //         },
    //         768: {

    //             dots: false,
    //         },
    //         992: {
    //             dots: true,
    //         },
    //     }
    // });

    window.onload = function () {

        var swiper = new Swiper('#mainslider', {
            autoHeight: true,
            autoplay: true,
            speed: 1000,
            loop: true
        });
    }


    $('.side-close').click(function () {
        $(".site-body").toggleClass("fixer");
        $(".side-bar").toggleClass("side-fixer");
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
    });

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            $(".card").toggleClass("height-fix");
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";

            }
        });
    }


    $("body").niceScroll({
        cursorcolor: "#2e2883",
        cursorwidth: 8,
        cursorborder: 0,
        cursoropacitymin: 0.5,
        cursoropacitymax: 1,
        cursorborderradius: 0,
        railalign: 'left',
        zindex: 9999999999,
        horizrailenabled: false
    });

    $(".side-bar").niceScroll({
        cursorcolor: "#000",
        cursorwidth: 10,
        cursorborder: 0,
        cursoropacitymin: 0,
        cursoropacitymax: 0.25,
        autohidemode: 'scroll',
        railalign: 'right',
        hidecursordelay: 200,
        bouncescroll: false,
        scrollspeed: 120,
        zindex: 9999999999
    });


    $('.search-btn').click(function () {
        if ($(".links").hasClass('menu-out')) {

            $(".links").removeClass("menu-out");
            $("#search").removeClass("search-in");
            $(".links").addClass("menu-in");
            $("#search").addClass("search-out");
            console.log("123")
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



    //unifying Product box height
    $('.prodimg').each(function () {
        var w = $('.prodimg').width();
        $('.prodimg').height(w);
    });

});
$(document).ready(function () {
    var swiper
    window.onload = function () {

        swiper = new Swiper('#mainslider', {
            autoHeight: true,
            autoplay: true,
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
        $('.menu-btn').hide()
    });
    $('.xs-overlay').click(function () {
        $('.xs-overlay').fadeOut(500);
        $('.side-bar').addClass('outscreen');
        $('.side-bar').removeClass('inscreen');
        $('.menu-btn').show(200)
    });
    $(".side-bar").click(function (e) {
        e.stopPropagation();
    });
    $('.close-btn').click(function () {
        $('.xs-overlay').fadeOut(500);
        $('.side-bar').addClass('outscreen');
        $('.side-bar').removeClass('inscreen');
        $('.menu-btn').show(200)
    });
    $('.side-close').click(function () {
        $("#mainslider").hide();
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
        $("#mainslider").show();
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
        railalign: (document.dir == 'rtl') ? 'right' : 'left',
        zindex: 9999999999,
        horizrailenabled: false
    });

    $(".side-bar").niceScroll({
        // cursorcolor: "#000",
        // cursorwidth: 10,
        // cursorborder: 0,
        // cursoropacitymin: 0,
        // cursoropacitymax: 0.25,
        // autohidemode: 'scroll',
        // railalign: 'right',
        // hidecursordelay: 200,
        // bouncescroll: false,
        // scrollspeed: 120,
        // zindex: 9999999999
        cursorcolor: "#000",
        cursorwidth: 10,
        cursorborder: 0,
        cursoropacitymin: 0,
        cursoropacitymax: 0.25,
        autohidemode: 'scroll',
        railalign: (document.dir == 'rtl') ? 'left' : 'right',
        hidecursordelay: 200,
        bouncescroll: false,
        scrollspeed: 120,
        horizrailenabled: false
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
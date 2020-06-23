$(function() {
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            header.addClass("stickyheader");
        } else {
            header.removeClass("stickyheader");
        }
    });
});


var owl = $('.stores-slider');
owl.owlCarousel({
    margin: 15,
    nav: true,
    loop: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    touchDrag: true,
    mouseDrag: true,
    autoplay: true,
    responsive: {
        50: {
            items: 2,
            loop: false,

        },
        800: {
            items: 3,
            loop: false
        },
        1055: {
            items: 4,
            loop: false
        },
        1280: {
            items: 6,
            loop: false,



        },
        2300: {
            items: 8,
            loop: false,
        }
    }
});


$('#videoiframe-popup').on('hidden.bs.modal', function() {
    $('video').trigger('pause');
});



jQuery(".login-item a.nav-link").click(function() {
    jQuery(".login-wrapper").fadeToggle();
    return false;
});




jQuery("body").click(function() {
    jQuery(".login-wrapper").fadeOut();
});


jQuery(".login-wrapper").click(function(e) {
    e.stopPropagation();
});
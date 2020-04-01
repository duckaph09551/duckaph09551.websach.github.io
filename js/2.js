$(document).ready(function() {
    $('.collapse  a.n1').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.bestseller').offset().top
        }, 2000);
        return false;
    })

    $('.collapse  a.n2').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.commingsoon').offset().top
        }, 2000);
        return false;
    })
    $('.collapse  a.n3').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.book_new').offset().top
        }, 2300);
        return false;
    })
    $('.collapse a.n4').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.promotion').offset().top
        }, 2300);
        return false;
    })
    $('.collapse  a.n5').click(function(event) {
        $('html,body').animate({
            scrollTop: $('.hot').offset().top
        }, 2300);
        return false;
    })







})

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })
    $('.carousel').carousel({
        interval: 2000
    })
});
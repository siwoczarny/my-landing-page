// Zmiana jednostek viewport na mobile

$(window).on("load", function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Animacja hamburgera

$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("active");
    e.preventDefault();
});


// Przesunięcie po kliknięciu strzałki

var main = $(".main-top");

$("#arrow").on("click", function (e) {
    $("body, html").animate({
        scrollTop: main.offset().top
    }, 1200)
    e.preventDefault();
});

// Zmiana tła navbaru po scrollu

$(document).scroll(function() {
    var nav = $('nav').height();
    var y = $(this).scrollTop();
    var h = $('header').height() - nav;
    // dorobić kod który po scrollu headera doda background do nav i zmieni kolor hamurgera
    if (y >= h) {
        $(".hamburger span").css("background-color", "#ffffff"),
        $("nav").css("background-color", "#95a3b3");
    } else {
        $(".hamburger span").css("background-color", "#95a3b3"),
        $("nav").css("background-color", "initial");
    };

});
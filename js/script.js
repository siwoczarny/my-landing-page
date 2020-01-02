// Animacja hamburgera

$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("active");
    e.preventDefault();
})


// Przesunięcie po kliknięciu strzałki

var main = $(".main-top");

$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: main.offset().top
    }, 1200)
})

// Zmiana tła navbaru po scrollu

$(document).scroll(function() {
    var y = $(this).scrollTop();
    var topSize = $('.header-top').height() * 1.25;
    var h = $('header').height() - topSize;
    var hdouble = $('header').height() * 1.75;
    
    if (y > h) {
        $(".hamburger span").css("background-color", "#ffffff");
    } else {
        $(".hamburger span").css("background-color", "#95a3b3");
    };

    if (y > hdouble) {
        $("nav").css("background-color", "#95a3b3");
    } else {
        $("nav").css("background-color", "initial");
    }
})
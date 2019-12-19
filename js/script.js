// Animacja hamburgera

$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("active");
    e.preventDefault();
})


// Przesunięcie po kliknięciu strzałki

$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".about").offset().top
    }, 1200)
})
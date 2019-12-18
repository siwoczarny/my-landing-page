// Animacja hamburgera

$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("active");
    e.preventDefault();
})


// Przesunięcie po kliknięciu strzałki

$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
})
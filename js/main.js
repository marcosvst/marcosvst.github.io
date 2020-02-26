$(document).on("scroll", function () {

    // Scrolling effect
    if ($(document).scrollTop() > 300) {
        $("nav").addClass("bg-light-custom");
        $("nav").removeClass("navbar-toggler-icon");
        $("span").addClass("navbar-toggler-icon-custom");
    } else {
        $("nav").removeClass("bg-light-custom");
        $("span").removeClass("navbar-toggler-icon-custom");
    }

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});


// (function() {
//     function scrollHorizontally(e) {
//         e = window.event || e;
//         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//         document.getElementById('scroll-overflow').scrollLeft -= (delta*40); // Multiplied by 40
//         e.preventDefault();
//     }
//     if (document.getElementById('scroll-overflow').addEventListener) {
//         // IE9, Chrome, Safari, Opera
//         document.getElementById('scroll-overflow').addEventListener("mousewheel", scrollHorizontally, false);
//         // Firefox
//         document.getElementById('scroll-overflow').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//     } else {
//         // IE 6/7/8
//         document.getElementById('scroll-overflow').attachEvent("onmousewheel", scrollHorizontally);
//     }
// })();
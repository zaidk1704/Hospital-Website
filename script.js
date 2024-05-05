// document.addEventListener("DOMContentLoaded",function(){
//     const pageLoader = document.querySelector(".page-loader");
//     pageLoadere.classList.add("fade-out");
//     setTimeout(function(){
//         pageLoader.style.display = "none";
//     }, 1000)
// });

window.onload = function(){
    const pageLoader = document.querySelector(".page-loader");
    pageLoader.classList.add("fade-out");
    setTimeout(function(){
        pageLoader.style.display = "none";
    }, 500);
}



document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector("#navbarSupportedContent");

    navbarToggler.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
        if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });
});

$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true
    });
});

$(document).ready(function () {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

});

var owl = $('.owl-carousel');
owl.owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

document.addEventListener("DOMContentLoaded", function(){
    var lazyImage = docment.getSelectorAll('.lazy');

    var lazyLoadObserver = new IntersectionObserver(function(entries, observer){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                var img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    lazyImage.forEach(function(img){
        lazyLoaderObserver.observ(img);
    });
});

// const lazyImage = document.querySelectorAll("img.lazy");
// lazyImage.forEach(function(image){
//     image.addEventListener("load", function(){
//         image.classList.remove("lazy");
//     });
//     image.src = image.dataset.src:
// })

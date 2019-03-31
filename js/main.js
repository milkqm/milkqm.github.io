$(document).ready(function() {
    "use strict";

    /*----------------------------------------------------*/
    /*  Sticky header
    /*----------------------------------------------------*/
    $(window).on("scroll", function() {
        var stickyHeader = $(window).scrollTop() > 105;
        $(".header-area").toggleClass("sticky", stickyHeader);
    });

    /*----------------------------------------------------*/
    /*  Nice select
    /*----------------------------------------------------*/
    $("select").niceSelect();

    /*----------------------------------------------------*/
    /*  Magnific Pop up js (Home Video)
    /*----------------------------------------------------*/
    $("#play-video").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    $(".img-pop-up").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });

    // -------   Owl Carousel -----//0
    (function home_banner_slider() {
        if ($(".home-banner-owl").length) {
            $(".home-banner-owl").owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: true,
                autoplay: 2500,
                smartSpeed: 1500,
                dots: true,
                responsiveClass: true,
                stagePadding: 0,
                navText: [
                    "<img src='img/prev.png' alt='' />",
                    "<img src='img/next.png' alt='' />"
                ],
                /*responsive: {
                    0: {
                        margin: 0,
                        stagePadding: 0
                    },
                    1299: {
                        margin: 0,
                        stagePadding: 0
                    }
                }*/
            });
        }
    })();

    (function loadCategoriesFlexSlider(){
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
        });
    })();

    // Select all links with hashes
    // Remove links that don't actually link to anything
    var $links = $('a[href*="#"]').not('[href="#"]').not('[href="#0"]');
    $links.click(function(event) {
        // On-page links
        var onPageLink = (
            location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        )
        if (onPageLink) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $("html, body").animate({
                        scrollTop: target.offset().top - 60
                    },
                    1000,
                    function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    }
                );
            }
        }
    });
});
$(window).on("load", function() {

    var $landingWrapper = $(".landing-wrapper"),
        $landingWrapper2 = $(".landing-wrapper2"),
        $landingInnerContent = $(".landing-inner-content"),
        $landingInnerContent2 = $(".landing-inner-content2");

    // set initial container to half of .landing-inner-content width
    //TweenMax.set($landingWrapper, {scrollTo: {x: $landingInnerContent.width()/4}, ease: Power2.easeOut});

    // scroll left and right
    $landingInnerContent.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper.width() / 2) {
            TweenMax.to($landingWrapper, 2, {
                scrollTo: {
                    x: "+=175"
                },
                ease: Power2.easeOut
            });
        } else {
            TweenMax.to($landingWrapper, 2, {
                scrollTo: {
                    x: "-=175"
                },
                ease: Power2.easeOut
            });
        }
    });

    $landingInnerContent2.on("mousemove touchmove", function(e) {
        if (e.clientX > $landingWrapper2.width() / 2) {
            TweenMax.to($landingWrapper2, 2, {
                scrollTo: {
                    x: "+=175"
                },
                ease: Power2.easeOut
            });
        } else {
            TweenMax.to($landingWrapper2, 2, {
                scrollTo: {
                    x: "-=175"
                },
                ease: Power2.easeOut
            });
        }
    });

});
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".logo img").attr("src", "images/logo_black.png");
        $(".icon a").css("color", "black");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
       $(".logo img").attr("src", "images/logo_white_text.png");
       $(".icon a").css("color", "White");

    }
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    // lockScroll();
}
// function lockScroll() {
//             if ($('body').hasClass('lock-scroll')) {
//                 $('body').removeClass('lock-scroll');
//             }
//             else {
//                 $('body').addClass('lock-scroll');
//             }
//       }
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

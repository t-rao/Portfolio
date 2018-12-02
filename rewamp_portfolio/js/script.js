$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".logo img").attr("src", "images/logo_black.png");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("active");
       $(".logo img").attr("src", "images/logo_white_text.png");
    }
});

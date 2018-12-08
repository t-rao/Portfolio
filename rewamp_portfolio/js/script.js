$(window).on("scroll", function() {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
    $(".logo img").attr("src", "images/logo_black.png");
    $(".icon a").css("color", "black");
    $(".nav_mu a").css("color", "black");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $(".logo img").attr("src", "images/logo_white_text.png");
    $(".icon a").css("color", "White");
      $(".nav_mu a").css("color", "White");

  }
  function myFunction(x) {
    if (x.matches) { // If media query matches
      $(".nav_mu a").css("color", "White");
    } else {
      console.log("<500")
    }
  }

  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



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




// Smooth scroll


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

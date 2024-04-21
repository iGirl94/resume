// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function () {
  AOS.init({
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// Toggle button to reveal more Work Experience/Education content
$(document).ready(function () {
  $(".myBtn").click(function () {
    // Find the "dots" and "more" elements within the same container
    var $dots = $(this).siblings(".text").find(".dots");
    var $more = $(this).siblings(".text").find(".more");

    // Toggle the visibility of "more" content
    $more.toggle();

    // Toggle the visibility of "dots" based on the state of "more"
    $dots.toggle(!$more.is(":visible"));

    // Change the button text based on the toggle state
    var buttonText = $more.is(":visible") ? "Read Less" : "Read More";
    $(this).text(buttonText);
  });
});
 

// Toggle button to show more/less Work Experiences
$(document).ready(function() {
  var $cards = $(".experience-container .card");
  var $button = $(".toggle-button");

  // Initially hide the .experience-container .card elements
  $cards.hide();

  // Toggle the entire experience-container
  $button.click(function() {
    $cards.slideToggle(function() {
      // Toggle button position after animation
      $(".experience-container .card-toggle-container").append($button);

      // Toggle button text
      var buttonText = $cards.is(":visible") ? "Less Experiences" : "More Experiences";
      $button.text(buttonText);
    });
  });
});

/* Video Player */

function togglePlay() {
  const video = document.getElementById('portfolio-video');
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function rewind() {
  const video = document.getElementById('portfolio-video');
  video.currentTime -= 10; // Rewind 10 seconds
}

function fastForward() {
  const video = document.getElementById('portfolio-video');
  video.currentTime += 10; // Fast forward 10 seconds
}

function toggleFullscreen() {
  const video = document.getElementById('portfolio-video');
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}

/* YouTube PopUp */
document.getElementById("videoLink").addEventListener("click", function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the video URL
  var videoUrl = document.getElementById("videoPlayer").querySelector("source").getAttribute("src");

  // Open the video in a pop-up window
  window.open(videoUrl, "Video Pop-up", "width=640,height=360");
});

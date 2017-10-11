const fixedHeaderScroll = function() {
// header scroll fixed

// Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 100);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) { return; }
    var scrollUp = function() {
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('fixed-header').addClass('not-fixed-header');
      }
    };
    var scrollDown = function() {
      $('header').removeClass('not-fixed-header').addClass('fixed-header');
    };
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      scrollDown();
    } else {
      // Scroll Up
      scrollUp();
    }
    lastScrollTop = st;
  }

  // When the user scrolls down 160px from the top of the document, show the button
  window.onscroll = function() { scrollFunction(); };

  function scrollFunction() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
      document.getElementById('scrollTop').style.display = 'block';
    } else {
      document.getElementById('scrollTop').style.display = 'none';
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //  document.body.scrollTop = 0; // For Chrome, Safari and Opera
  //  document.documentElement.scrollTop = 0; // For IE and Firefox
  // }

};
export {fixedHeaderScroll};

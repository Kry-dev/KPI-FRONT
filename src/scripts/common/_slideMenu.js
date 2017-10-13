// burger-menu for slide navigation
var slideMenu = function() {
  var showSlide = function() {
    $('.right-slide-menu').toggleClass('slide-show');
    $('.header-wrapper').addClass('overlay-dark');
  };
  var closeSlide = function() {
    $('.right-slide-menu').toggleClass('slide-show');
    $('.header-wrapper').removeClass('overlay-dark');
  };

  $('.btn-slide').on('click', function() {
    showSlide();
  });
  $('.btn-slide-close').on('click', function() {
    closeSlide();
  });

  // accordion menu
  $('#slide-menu ul li a').on('click', function(e) {
    // allow links to be followed if they don't have a sub-menu
    if (!$(this).parent().has('ul').length) {
      return;
    }

    // we have a sub-menu, so stop the link from being followed
    e.preventDefault();

    if (!$(this).hasClass('accordion-active')) {
      // we need to know which 'level' we're on
      var currentLevel = $(this).closest('ul');
      $('li ul', currentLevel).slideUp(350);
      $('li a', currentLevel).removeClass('accordion-active');

      // open our new menu and add the open class
      $(this).next('ul').slideDown(350);
      $(this).addClass('accordion-active');
    } else {
      $(this).removeClass('accordion-active');
      $(this).next('ul').slideUp(350);
    }
  });

};
export {slideMenu};
// end of burger-menu for slide navigation

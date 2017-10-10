// hamburger
const hamburger = function() {
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
  });
};
export {hamburger};

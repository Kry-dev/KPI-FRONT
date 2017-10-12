// When the user clicks on the button, scroll to the top of the document
const topFunction = function() {
  $('#scrollTop').on('click', function() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
  });
};
export {topFunction};

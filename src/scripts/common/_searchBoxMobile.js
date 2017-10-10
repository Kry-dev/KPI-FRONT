const searchBoxMobile = function() {
  var searchMobile = $('.search-box-mobile > .search-box');
  $('#openSearchMobile').click(function(a) {
    a.preventDefault();
    searchMobile.toggle();
  });
  $('#closeSearchMobile').click(function(e) {
    e.preventDefault();
    searchMobile.toggle();
  });
};
export {searchBoxMobile};

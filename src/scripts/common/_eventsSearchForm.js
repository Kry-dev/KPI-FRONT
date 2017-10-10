const eventsSearchForm = function() {
  $('.search-result .search-result-table thead tr td p').click(function() {
    var caret = $(this).find('i');
    if (caret.hasClass('caret')) {
      caret.removeClass('caret');
      caret.addClass(' caret-up');
    } else {
      caret.removeClass('caret-up');
      caret.addClass(' caret');
    }
  });

  if ($('#date-from').length) {
    $('#date-from').datepicker();
  }
  if ($('#date-to').length) {
    $('#date-to').datepicker();
  }
};
export {eventsSearchForm};

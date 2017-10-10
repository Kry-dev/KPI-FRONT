var iconsCard = function() {
  $('#icons-card-wrapper .icons-card--icon .icon-btn.icon-circle').on('click', function(e) {
    console.log('click');
    e.preventDefault();
    $(this).closest('.icons-card-item').find('.icons-card--item-desc').slideToggle('slow');
  });
};
export {iconsCard};

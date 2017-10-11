var universalCardSlider = function() {
  if ($('.universal-slider').length) {
    console.log('asdasdasd');
    var attrData = $('.universal-slider').attr('slider-autoplay');
    var autoplay = false;
    if (attrData === 'true') {
      autoplay = true;
    }
    $('.universal-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: true,
      nextArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-next' height='24' viewBox='0 0 24 24' width='24'>" +
      "<path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg>",
      prevArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-prev' height='24' viewBox='0 0 24 24' width='24'>" +
      "<path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'/><path d='M0-.5h24v24H0z' fill='none'/></svg>",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: autoplay,
      adaptiveHeight: false
    });
  }
  if ($('.testimonials-slider').length) {
    console.log('asdasdasd');
    var attrData = $('.testimonials-slider').attr('slider-autoplay');
    var autoplay = false;
    if (attrData === 'true') {
      autoplay = true;
    }
    $('.testimonials-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: true,
      nextArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-next' height='24' viewBox='0 0 24 24' width='24'>" +
      "<path d='M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z'/><path d='M0-.25h24v24H0z' fill='none'/></svg>",
      prevArrow: "<svg xmlns='http://www.w3.org/2000/svg' class='slick-prev' height='24' viewBox='0 0 24 24' width='24'>" +
      "<path d='M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z'/><path d='M0-.5h24v24H0z' fill='none'/></svg>",
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: autoplay,
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
};
export {universalCardSlider};

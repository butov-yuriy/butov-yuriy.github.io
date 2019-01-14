$(document).ready(function(){
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prevArrow.svg"></button>',
    nextArrow: '<button class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/nextArrow.svg"></button>'
  })
  $('.features-slider').slick({
  	infinite: true,
  	slidesToShow: 4,
  	slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="arrow prev"></button>',
        nextArrow: '<button class="arrow next"></button>'
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="arrow prev"></button>',
        nextArrow: '<button class="arrow next"></button>'
      }
    }
   ]
  });
  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });
  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });
});


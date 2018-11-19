$('.services-slider').slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 100,
  arrows: true,
  dots: true,
  prevArrow: '<i class="slick-btn left-btn fa fa-chevron-left" aria-hidden="true"></i>',
  nextArrow: '<i class="slick-btn right-btn fa fa-chevron-right" aria-hidden="true"></i>',
  responsive:[{
  	breakpoint: 768,
      settings: {
    		slidesToShow: 1,
    	}
  }
  ]
});



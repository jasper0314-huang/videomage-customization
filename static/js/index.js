window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
	// Default carousel
	var defaultOptions = {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  loop: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	};
	var carousels = bulmaCarousel.attach('.carousel:not(#qualitative-carousel)', defaultOptions);

	// Qualitative Results carousel
	var qualitativeOptions = {
	  slidesToScroll: 1,
	  slidesToShow: 2,
	  loop: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 5000,
	};
	var qualitativeCarousel = bulmaCarousel.attach('#qualitative-carousel', qualitativeOptions);

	bulmaSlider.attach();
  });
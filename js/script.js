function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});
// burger
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header, .header__phone').toggleClass('active');
	});
});
$(document).ready(function () {
	$('.swiper').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
		prevArrow: '<div class="swiper-prev"><img src="icons/icons/icons.svg#swiper-prev" alt=""/></div>',
		nextArrow: '<div class="swiper-next"><img src="icons/icons/icons.svg#swiper-next" alt=""/></div>',
		dots: true,
		dotsClass: 'swiper-pagination',
		responsive: [
			{
			  breakpoint: 993,
			  settings: {
				 slidesToShow: 1,
				 slidesToScroll: 1,
				 dots: false
			  }
			},
			{
			  breakpoint: 451,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: false
			  }
			}
		 ]
	});
}); 
$(document).ready(function () {
	$('.start__swiper').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
	});
}); 
// services service__item
$(document).ready(function () {
	$('#item1').show();
	$('#item2, #item3, #item4, #item5, #item6').hide();
	$('#button1').click(function () {
		$('#button1').toggleClass('active');
		$('#button2, #button3, #button4, #button5, #button6').removeClass('active');
		$('#item1').show();
		$('#item2, #item3, #item4, #item5, #item6').hide();
	})
	$('#button2').click(function () {
		$('#button2').toggleClass('active');
		$('#button1, #button3, #button4, #button5, #button6').removeClass('active');
		$('#item2').show();
		$('#item1, #item3, #item4, #item5, #item6').hide();
	})
	$('#button3').click(function () {
		$('#button3').toggleClass('active');
		$('#button1, #button2, #button4, #button5, #button6').removeClass('active');
		$('#item3').show();
		$('#item1, #item2, #item4, #item5, #item6').hide();
	})
	$('#button4').click(function () {
		$('#button4').toggleClass('active');
		$('#button1, #button2, #button3, #button5, #button6').removeClass('active');
		$('#item4').show();
		$('#item1, #item2, #item3, #item5, #item6').hide();
	})
	$('#button5').click(function () {
		$('#button5').toggleClass('active');
		$('#button1, #button2, #button3, #button4, #button6').removeClass('active');
		$('#item5').show();
		$('#item1, #item2, #item3, #item4, #item6').hide();
	})
	$('#button6').click(function () {
		$('#button6').toggleClass('active');
		$('#button1, #button2, #button3, #button4, #button5').removeClass('active');
		$('#item6').show();
		$('#item1, #item2, #item3, #item4, #item5').hide();
	})
});
// accordion
$(document).ready(function () {
	let accordion = (function (element) {
		let _getItem = function (elements, className) {
		  let element = undefined;
		  elements.forEach(function (item) {
			if (item.classList.contains(className)) {
			  element = item;
			}
		  });
		  return element;
		};
		return function () {
		  let _mainElement = {},
			_items = {}, 
			_contents = {};
		  let _actionClick = function (e) {
			if (!e.target.classList.contains('accordion__header')) { 
			  return;
			}
			e.preventDefault();
			let header = e.target,
			  item = header.parentElement,
			  itemActive = _getItem(_items, 'show');
			if (itemActive === undefined) {
			  item.classList.add('show');
			} else {
			  itemActive.classList.remove('show');
			  if (itemActive !== item) {
				item.classList.add('show');
			  }
			}
		  },
			_setupListeners = function () {
			  _mainElement.addEventListener('click', _actionClick);
			};
		  return {
			init: function (element) {
			  _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
			  _items = _mainElement.querySelectorAll('.accordion__item');
			  _setupListeners();
			}
		  }
  
		}
	  })();
	  let accordion1 = accordion();
	  accordion1.init('#accordion');
});
// burger
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header, .header__phone').toggleClass('active');
	});
});
// ibg
function ibg() {
	let e = document.querySelectorAll(".ibg");
	for (var t = 0; t < e.length; t++)e[t].querySelector("img") && (e[t].style.backgroundImage = "url(" + e[t].querySelector("img").getAttribute("src") + ")")
}
// swiper
$(document).ready((function () {
	new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 2,
		spaceBetween: 50,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 59
			},
			300: {
				slidesPerView: 1,
				spaceBetween: 50
			}
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		}
	})
}
));
$(document).ready((function () {
	new Swiper(".swiper-container2", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 2000,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			999: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		}
	})
}
));
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
$(window).on('load', function () {
	$('body').addClass('loaded_hiding');
	window.setTimeout(function () {
		$('body').addClass('loaded');
		$('body').removeClass('loaded_hiding');
	}, 500);
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
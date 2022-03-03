// webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// burger
function burger(){
	let header__burger = document.querySelector('.header__burger'),
		 header__menu = document.querySelector('.header__menu'),
		 header__phone = document.querySelector('.header__phone'),
		 header = document.querySelector('.header');
	header__burger.addEventListener('click', function(){
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active'), header__phone.classList.contains('active')){
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active') || header__phone.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active') || header__phone.classList.add('active')
		}
	})
}
burger();
// swipers
new Swiper(".review-container", {
	direction: "horizontal",
	loop: !1,
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
new Swiper(".start-container", {
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
	keyboard: {
		enabled: !0,
		onlyInViewport: !1
	}
})
// accordion
function accordionMain(){
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
}
accordionMain()
// services service__item
function switchs(){
	let item1 = document.querySelector('#item1')
	let item2 = document.querySelector('#item2')
	let item3 = document.querySelector('#item3')
	let item4 = document.querySelector('#item4')
	let item5 = document.querySelector('#item5')
	let item6 = document.querySelector('#item6')
	let button1 = document.querySelector('#button1')
	let button2 = document.querySelector('#button2')
	let button3 = document.querySelector('#button3')
	let button4 = document.querySelector('#button4')
	let button5 = document.querySelector('#button5')
	let button6 = document.querySelector('#button6')
	item1.classList.add('show')
	button1.addEventListener("click", function() {
		item1.classList.add('show')
		item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
	})
	button2.addEventListener("click", function() {
		item2.classList.add('show')
		item1.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
	})
	button3.addEventListener("click", function() {
		item3.classList.add('show')
		item2.classList.remove('show') || item1.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
	})
	button4.addEventListener("click", function() {
		item4.classList.add('show')
		item2.classList.remove('show') || item3.classList.remove('show') || item1.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
	})
	button5.addEventListener("click", function() {
		item5.classList.add('show')
		item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item1.classList.remove('show') || item6.classList.remove('show')
	})
	button6.addEventListener("click", function() {
		item6.classList.add('show')
		item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item1.classList.remove('show')
	})
}
switchs()
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
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// burger
function burger() {
	let header__burger = document.querySelector('.header__burger'),
		header__menu = document.querySelector('.header__menu'),
		header__phone = document.querySelector('.header__phone'),
		header = document.querySelector('.header');
	header__burger.addEventListener('click', function () {
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active'), header__phone.classList.contains('active')) {
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active') || header__phone.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active') || header__phone.classList.add('active')
		}
	})
}
burger();
// swipers
if (document.querySelector('.body__home')) {
	// home swiper
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
	// accordion
	function accordion() {
		const items = document.querySelectorAll('.accordion__header')
		items.forEach(item => {
			item.addEventListener('click', () => {
				const parent = item.parentNode
				if (parent.classList.contains('show')) {
					parent.classList.remove('show')
				} else {
					document
						.querySelectorAll('.accordion__item')
						.forEach(child => child.classList.remove('show'))
					parent.classList.add('show')
				}
			})
		})
	}
	accordion()
}
if (document.querySelector('.body__blog')) {
	// blog swiper
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
}
if (document.querySelector('.body__services')) {
	// services service__item
	function switchs() {
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
		button1.addEventListener("click", function () {
			item1.classList.add('show')
			item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
		})
		button2.addEventListener("click", function () {
			item2.classList.add('show')
			item1.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
		})
		button3.addEventListener("click", function () {
			item3.classList.add('show')
			item2.classList.remove('show') || item1.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
		})
		button4.addEventListener("click", function () {
			item4.classList.add('show')
			item2.classList.remove('show') || item3.classList.remove('show') || item1.classList.remove('show') || item5.classList.remove('show') || item6.classList.remove('show')
		})
		button5.addEventListener("click", function () {
			item5.classList.add('show')
			item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item1.classList.remove('show') || item6.classList.remove('show')
		})
		button6.addEventListener("click", function () {
			item6.classList.add('show')
			item2.classList.remove('show') || item3.classList.remove('show') || item4.classList.remove('show') || item5.classList.remove('show') || item1.classList.remove('show')
		})
	}
	switchs()
}
// animation
gsap.utils.toArray('.content-left').forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { x: '-200px' }, { x: "0px", duration: .8, immediateRender: false })
})
gsap.utils.toArray('.content-right').forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { x: '200px' }, { x: "0px", duration: .8, immediateRender: false })
})
gsap.utils.toArray('.content-top').forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { y: '-200px' }, { y: "0px", duration: .8, immediateRender: false })
})
gsap.utils.toArray('.content-bottom').forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { y: '200px' }, { y: "0px", duration: .8, immediateRender: false })
})
gsap.utils.toArray('.content-opacity').forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1, immediateRender: false })
})
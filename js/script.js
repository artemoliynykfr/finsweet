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
		spaceBetween: 0,
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 0
			},
			300: {
				slidesPerView: 1,
				spaceBetween: 0
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
		},
		scrollbar: {
			el: ".swiper-scrollbar"
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
// accordion
$(document).ready(function () {
	var acc = document.getElementsByClassName("accordion");
	var i = document.getElementsByClassName("panel");
	for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
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
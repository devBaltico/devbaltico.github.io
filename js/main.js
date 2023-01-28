'use strict';

(function($) {
	/*------------------
        Preloader
    --------------------*/
	$(window).on('load', function() {
		$('.loader').fadeOut();
		$('#preloder').delay(200).fadeOut('slow');

		/*------------------
            Portfolio filter
        --------------------*/
		$('.portfolio__filter li').on('click', function() {
			$('.portfolio__filter li').removeClass('active');
			$(this).addClass('active');
		});
		if ($('.portfolio__gallery').length > 0) {
			var containerEl = document.querySelector('.portfolio__gallery');
			var mixer = mixitup(containerEl);
		}
	});

	/*------------------
        Background Set
    --------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	//Masonary
	$('.work__gallery').masonry({
		itemSelector: '.work__item',
		columnWidth: '.grid-sizer',
		gutter: 10,
	});

	/*------------------
		Navigation
	--------------------*/
	$('.mobile-menu').slicknav({
		prependTo: '#mobile-menu-wrap',
		allowParentLinks: true,
	});

	/*------------------
		Hero Slider
	--------------------*/
	$('.hero__slider').owlCarousel({
		loop: true,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		margin: 0,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
	});

	var dot = $('.hero__slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if (index < 10) {
			$(this).html('0').append(index);
		} else {
			$(this).html(index);
		}
	});

	/*------------------
        Testimonial Slider
    --------------------*/
	$('.testimonial__slider').owlCarousel({
		loop: true,
		margin: 0,
		items: 3,
		dots: true,
		dotsEach: 2,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {
			992: {
				items: 3,
			},
			768: {
				items: 2,
			},
			320: {
				items: 1,
			},
		},
	});

	/*------------------
        Latest Slider
    --------------------*/
	$('.latest__slider').owlCarousel({
		loop: true,
		margin: 0,
		items: 3,
		dots: true,
		dotsEach: 2,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {
			992: {
				items: 3,
			},
			768: {
				items: 2,
			},
			320: {
				items: 1,
			},
		},
	});

	/*------------------
        Logo Slider
    --------------------*/
	$('.logo__carousel').owlCarousel({
		loop: true,
		margin: 100,
		items: 6,
		dots: false,
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {
			992: {
				items: 5,
			},
			768: {
				items: 4,
			},
			480: {
				items: 3,
			},
			320: {
				items: 2,
			},
		},
	});

	/*------------------
        Video Popup
    --------------------*/
	$('.video-popup').magnificPopup({
		type: 'iframe',
	});

	/*------------------
        Counter
    --------------------*/
	$('.counter_num').each(function() {
		$(this).prop('Counter', 0).animate(
			{
				Counter: $(this).text(),
			},
			{
				duration: 4000,
				easing: 'swing',
				step: function(now) {
					$(this).text(Math.ceil(now));
				},
			}
		);
	});
})(jQuery);

/*------------------
        Email JS
    --------------------*/

//https://www.youtube.com/watch?v=LQ-tPxSlM9s
/*
window.addEventListener('load', () => {
	const form = document.querySelector('#form');

	const nombre = document.getElementById('name');
	const email = document.getElementById('email');
	const asunto = document.getElementById('asunto');
	const mensaje = document.getElementById('mensaje');

	form.addEventListener('submit', e => {
		e.preventDefault();
		validaCampos();
	});

	const validaCampos = () => {
		//capturar los valores ingresados por el usuario
		const nombreValor = nombre.value.trim();
		const emailValor = email.value.trim();
		const asuntoValor = asunto.value.trim();
		const mensajeValor = mensaje.value();

		if (!nombreValor === '') {
			validaFalla(nombre, 'Campo vacío');
		} else {
			validaOk(nombre);
		}

		if (!emailValor === '') {
			validaFalla(email, 'Campo vacío');
		} else {
			validaOk(email);
		}

		if (!asuntoValor === '') {
			validaFalla(asunto, 'Campo vacío');
		} else {
			validaOk(asunto);
		}

		if (!mensajeValor === '') {
			validaFalla(mensaje, 'Campo vacío');
		} else {
			validaOk(mensaje);
		}
	};

	const validaFalla = (input, msje) => {
		const formControl = input.parentElement;
		const aviso = formControl.querySelector('p');
		aviso.innerText = msje;

		formControl.className = 'form-control falla';
	};
	const validaOk = (input, msje) => {
		const formControl = input.parentElement;
		formControl.className = 'form-control ok';
	};
});
*/

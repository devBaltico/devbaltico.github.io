window.addEventListener('load', () => {
	const form = document.getElementById('form');
	const nombre = document.getElementById('nombre');
	const email = document.getElementById('email');
	const asunto = document.getElementById('asunto');
	const mensaje = document.getElementById('mensaje');

	form.addEventListener('submit', e => {
		e.preventDefault();

		checkInputs();
	});

	function checkInputs() {
		// trim to remove the whitespaces
		const nombreValor = nombre.value.trim();
		const emailValor = email.value.trim();
		const asuntoValor = asunto.value.trim();
		const mensajeValor = mensaje.value.trim();

		//validando campo nombre
		if (!nombreValor) {
			console.log('CAMPO VACIO');
			validaFalla(nombre, 'Campo vacío');
		} else {
			validaOk(nombre);
		}
		//validando campo email
		if (!emailValor) {
			validaFalla(email, 'Campo vacío');
		} else {
			validaOk(email);
		}
		//validando campo asunto
		if (!asuntoValor) {
			validaFalla(Asunto, 'Campo vacío');
		} else {
			validaOk(Asunto);
		}
		//validando campo mensaje
		if (!mensajeValor) {
			validaFalla(mensaje, 'Campo vacío');
		} else {
			validaOk(mensaje);
		}
	}
});

/** ===================== Bonton de enviar ====================== */

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();

	btn.value = 'Enviando...';

	const serviceID = 'default_service';
	const templateID = 'template_o6vtk1n';

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			btn.value = 'Enviar Mensaje';
			alert('Mensaje enviado correctamente!');
		},
		err => {
			btn.value = 'Enviar Mensaje';
			alert(JSON.stringify(err));
		}
	);
});

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function() {
	efectoHabilidades();
};

/*==================== Button Scroll to top ====================*/
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
	$('html, body').animator({ scrollTop: 0 }, 'slow');
});

/** ===================== Bonton de enviar ====================== */
const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const error = document.getElementById('warnings');

const btn = document.getElementById('button');

function enviarFormulario() {
	let mensajeError = [];

	if (nombre.value === null || nombre.value === '') {
		mensajeError.push('¡Ingrese un nombre!');
	}

	if (email.value === null || email.value === '') {
		mensajeError.push('¡Ingrese un email!');
	}

	if (asunto.value === null || asunto.value === '') {
		mensajeError.push('¡Ingrese un asunto!');
	}

	if (mensaje.value === null || mensaje.value === '') {
		mensajeError.push('¡Ingrese un mensaje!');
	} else {
	}

	error.innerHTML = mensajeError.join(', <br>');

	if (mensajeError.length > 0) {
		return false; // Detiene la ejecución si hay mensajes de error
	}

	document.getElementById('form').addEventListener('submit', function (event) {
		event.preventDefault();

		enviarFormulario();

		btn.value = 'Enviando...';

		const serviceID = 'default_service';
		const templateID = 'service_bpori8t';

		emailjs.sendForm(serviceID, templateID, this).then(
			() => {
				btn.value = 'Enviar Mensaje';
				alert('¡Mensaje enviado correctamente!');
				form.reset;
			},
			(err) => {
				btn.value = 'Enviar Mensaje';
				alert(JSON.stringify(err));
			},
		);
	});
	
	return true;
}

/*==================== Button Scroll to top ====================*/
/* Back To Top Button */
window.onscroll = function () {
	scrollFunctionBTT(); // back to top button
};

// Get the button
myButton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = 'block';
	} else {
		myButton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

window.addEventListener('load', () => {
	const form = document.getElementById('form');
	const nombre = document.getElementById('nombre');
	const email = document.getElementById('email');
	const asunto = document.getElementById('asunto');
	const mensaje = document.getElementById('mensaje');

	form.addEventListener('submit', (e) => {
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

document.getElementById('form').addEventListener('submit', function (event) {
	event.preventDefault();

	btn.value = 'Enviando...';

	const serviceID = 'default_service';
	const templateID = 'template_o6vtk1n';

	emailjs.sendForm(serviceID, templateID, this).then(
		() => {
			btn.value = 'Enviar Mensaje';
			alert('Mensaje enviado correctamente!');
		},
		(err) => {
			btn.value = 'Enviar Mensaje';
			alert(JSON.stringify(err));
		},
		form.reset()
	);
});

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

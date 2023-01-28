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
		const nombreValue = nombre.value.trim();
		const emailValue = email.value.trim();
		const asuntoValue = asunto.value.trim();
		const mensajeValue = mensaje.value.trim();

		//validando campo usuario
		//(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
		if (!nombreValor) {
			//console.log('CAMPO VACIO')
			validaFalla(nombre, 'Campo vacío');
		} else {
			validaOk(nombre);
		}
	}
});

/** ===================== Bonton de enviar ====================== */
/*
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
		}
	);
});
*/

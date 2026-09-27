const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    status.textContent = 'Formulario listo. Falta conectar el servicio de envío.';
  });
}

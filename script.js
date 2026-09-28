'use strict';
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const endpoint = form?.dataset.endpoint.trim();
const button = form?.querySelector('button');
if (form && status && button) {
  // Configure data-endpoint in index.html with an HTTPS JSON form endpoint.
  button.disabled = !endpoint;
  if (endpoint) form.querySelector('.form-note').hidden = true;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!endpoint) return;
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.textContent = 'Enviando…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Submission failed');
      status.textContent = 'Gracias. Tu mensaje se ha enviado.';
      form.reset();
    } catch {
      status.textContent = 'No se pudo enviar el mensaje. Tus datos se conservan; vuelve a intentarlo.';
    } finally {
      clearTimeout(timeout);
      button.disabled = false;
    }
  });
}
const navLinks = [...document.querySelectorAll('.nav-link')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, {rootMargin: '-10% 0px -65% 0px'});
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}

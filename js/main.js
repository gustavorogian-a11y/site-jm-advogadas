// TODO: substituir pelo número real do WhatsApp Business do escritório.
// Formato: código do país + DDD + número, só dígitos (ex: 5511987654321).
var WHATSAPP_NUMBER = '55SEUNUMEROAQUI';

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  document.querySelectorAll('.js-whatsapp').forEach(function (el) {
    var message = el.getAttribute('data-message') ||
      'Olá! Vim pelo site e gostaria de falar com uma das advogadas.';
    el.setAttribute('href', 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
});

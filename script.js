document.addEventListener('DOMContentLoaded', function () {
  var burgerBtn = document.getElementById('burgerBtn');
  var navCtaWrap = document.getElementById('navCtaWrap');
  var navLinks = document.querySelectorAll('#navLinks a');

  if (burgerBtn && navCtaWrap) {
    burgerBtn.addEventListener('click', function () {
      var isOpen = navCtaWrap.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after a nav link is tapped
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navCtaWrap.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Botones flotantes (WhatsApp + volver arriba) ----------
  var floatWa = document.getElementById('floatWa');
  var floatTop = document.getElementById('floatTop');
  var SHOW_AFTER = 320; // px de scroll antes de mostrar los botones

  function toggleFloatButtons() {
    var visible = window.scrollY > SHOW_AFTER;
    if (floatWa) floatWa.classList.toggle('is-visible', visible);
    if (floatTop) floatTop.classList.toggle('is-visible', visible);
  }

  if (floatWa || floatTop) {
    toggleFloatButtons();
    window.addEventListener('scroll', toggleFloatButtons, { passive: true });
  }

  if (floatTop) {
    floatTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

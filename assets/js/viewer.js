/* Volpe Calogero — Mes réalisations administratives — visionneuse d'images.
   Amélioration progressive : les images restent affichées et lisibles dans la
   page ; ce module ajoute l'ouverture en grand (aperçu sur fond assombri) avec
   zoom, navigation précédent / suivant, clavier et molette. Aucune image n'est
   retirée de la page : la visionneuse est une couche posée par-dessus, créée
   par JavaScript — aucun contrôle inopérant lorsque JavaScript est désactivé. */
(function () {
  'use strict';

  function estLien(img) {
    // Une image déjà enveloppée dans un lien garde son comportement d'origine.
    var p = img.parentNode;
    while (p && p !== document.body) {
      if (p.tagName === 'A') { return true; }
      p = p.parentNode;
    }
    return false;
  }

  function construire() {
    var toutes = Array.prototype.slice.call(
      document.querySelectorAll('.site-main figure img')
    );
    var images = toutes.filter(function (img) { return !estLien(img); });
    if (!images.length) { return; }

    /* ---- Couche d'aperçu, réutilisée pour toutes les images de la page ---- */
    var vue = document.createElement('div');
    vue.className = 'visionneuse';
    vue.setAttribute('role', 'dialog');
    vue.setAttribute('aria-modal', 'true');
    vue.setAttribute('aria-label', "Aperçu de l'image");

    var fond = document.createElement('button');
    fond.type = 'button';
    fond.className = 'visionneuse-fond';
    fond.setAttribute('aria-label', "Fermer l'aperçu");

    var boite = document.createElement('figure');
    boite.className = 'visionneuse-boite';

    var img = document.createElement('img');
    img.setAttribute('alt', '');

    var legende = document.createElement('figcaption');

    boite.appendChild(img);
    boite.appendChild(legende);

    var fermer = document.createElement('button');
    fermer.type = 'button';
    fermer.className = 'visionneuse-fermer';
    fermer.setAttribute('aria-label', "Fermer l'aperçu");
    fermer.textContent = '✕';

    var nav = document.createElement('div');
    nav.className = 'visionneuse-nav';
    nav.innerHTML =
      '<button type="button" class="visionneuse-btn" data-role="zoom" aria-label="Zoomer l&#39;image" aria-pressed="false">+</button>' +
      '<button type="button" class="visionneuse-btn" data-dir="-1" aria-label="Image précédente">‹</button>' +
      '<button type="button" class="visionneuse-btn" data-dir="1" aria-label="Image suivante">›</button>';

    vue.appendChild(fond);
    vue.appendChild(boite);
    vue.appendChild(fermer);
    vue.appendChild(nav);
    document.body.appendChild(vue);

    var btnZoom = nav.querySelector('[data-role="zoom"]');
    var iCourant = 0;
    var focusRetour = null;

    /* ---- Chaque image de la page devient cliquable et accessible ---- */
    images.forEach(function (source, i) {
      source.classList.add('image-ouvrable');
      source.setAttribute('tabindex', '0');
      source.setAttribute('role', 'button');
      source.setAttribute('aria-label', 'Agrandir : ' + (source.getAttribute('alt') || 'image'));
      source.addEventListener('click', function () { ouvrir(i); });
      source.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
          e.preventDefault();
          ouvrir(i);
        }
      });
    });

    /* ---- États ---- */
    function estZoom() { return boite.classList.contains('est-zoom'); }
    function majZoom() {
      var z = estZoom();
      btnZoom.setAttribute('aria-pressed', z ? 'true' : 'false');
      btnZoom.setAttribute('aria-label', z ? "Réduire l'image" : "Zoomer l'image");
      btnZoom.textContent = z ? '−' : '+';
    }
    function resetZoom() {
      boite.classList.remove('est-zoom');
      majZoom();
    }
    function afficher(i) {
      iCourant = i;
      var source = images[i];
      img.setAttribute('src', source.getAttribute('src'));
      img.setAttribute('alt', source.getAttribute('alt') || '');
      var figure = source.parentNode;
      var cap = (figure && figure.tagName === 'FIGURE') ? figure.querySelector('figcaption') : null;
      legende.textContent = cap ? cap.textContent.trim() : (source.getAttribute('alt') || '');
    }
    function ouvrir(i) {
      focusRetour = document.activeElement;
      resetZoom();
      afficher(i);
      vue.classList.add('est-ouverte');
      document.body.style.overflow = 'hidden';
      fermer.focus();
    }
    function fermerVue() {
      vue.classList.remove('est-ouverte');
      resetZoom();
      document.body.style.overflow = '';
      if (focusRetour && focusRetour.focus) { focusRetour.focus(); }
      focusRetour = null;
    }
    function pas(dir) {
      resetZoom();
      afficher((iCourant + dir + images.length) % images.length);
    }
    function basculerZoom() {
      boite.classList.toggle('est-zoom');
      if (estZoom()) { boite.scrollTop = 0; boite.scrollLeft = 0; }
      majZoom();
    }

    /* ---- Commandes ---- */
    fond.addEventListener('click', fermerVue);
    fermer.addEventListener('click', fermerVue);
    btnZoom.addEventListener('click', basculerZoom);
    img.addEventListener('click', basculerZoom);
    Array.prototype.forEach.call(nav.querySelectorAll('[data-dir]'), function (b) {
      b.addEventListener('click', function () {
        pas(parseInt(b.getAttribute('data-dir'), 10));
      });
    });

    /* Clavier : Échap ferme ; + / - ; flèches (défilement si l'image est zoomée) */
    document.addEventListener('keydown', function (e) {
      if (!vue.classList.contains('est-ouverte')) { return; }
      if (e.key === 'Escape') { fermerVue(); }
      else if (e.key === '+' || e.key === '=') { if (!estZoom()) { e.preventDefault(); basculerZoom(); } }
      else if (e.key === '-' || e.key === '_') { if (estZoom()) { e.preventDefault(); basculerZoom(); } }
      else if (estZoom()) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); boite.scrollLeft -= 80; }
        else if (e.key === 'ArrowRight') { e.preventDefault(); boite.scrollLeft += 80; }
        else if (e.key === 'ArrowUp') { e.preventDefault(); boite.scrollTop -= 80; }
        else if (e.key === 'ArrowDown') { e.preventDefault(); boite.scrollTop += 80; }
      }
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); pas(-1); }
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); pas(1); }
    });

    /* Molette : haut = image précédente, bas = image suivante (sauf si zoomée) */
    document.addEventListener('wheel', function (e) {
      if (!vue.classList.contains('est-ouverte')) { return; }
      if (estZoom()) { return; }
      e.preventDefault();
      pas(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', construire); }
  else { construire(); }
})();

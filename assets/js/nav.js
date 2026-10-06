/* Volpe Calogero — Mes réalisations administratifs — navigation.
   Deux conforts ajoutés par JavaScript (amélioration progressive) : un bouton
   « retour en haut » et un bouton « copier » à côté de chaque adresse e-mail.
   Les boutons sont créés par JavaScript, donc aucun contrôle inopérant lorsque
   JavaScript est désactivé. La navigation collante et l'indication de la page
   courante (aria-current) restent, elles, gérées en CSS et en HTML. */
(function () {
  'use strict';

  function mouvementReduit() {
    return window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* Bouton « retour en haut » : apparaît après 400 px de défilement. */
  function construireRetourHaut() {
    var bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'back-to-top';
    bouton.setAttribute('aria-label', 'Retour en haut de page');
    bouton.textContent = '↑ Haut';
    document.body.appendChild(bouton);

    var enAttente = false;
    function majVisibilite() {
      if (window.scrollY > 400) {
        bouton.classList.add('is-visible');
      } else {
        bouton.classList.remove('is-visible');
      }
      enAttente = false;
    }
    window.addEventListener('scroll', function () {
      if (!enAttente) {
        enAttente = true;
        window.requestAnimationFrame(majVisibilite);
      }
    }, { passive: true });

    bouton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: mouvementReduit() ? 'auto' : 'smooth' });
    });

    majVisibilite();
  }

  /* Copie d'un texte dans le presse-papiers, avec replis successifs. */
  function copierTexte(texte) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texte);
    }
    return new Promise(function (resolve, reject) {
      var zone = document.createElement('textarea');
      zone.value = texte;
      zone.setAttribute('readonly', '');
      zone.style.position = 'fixed';
      zone.style.top = '-9999px';
      document.body.appendChild(zone);
      zone.select();
      try {
        var ok = document.execCommand('copy');
        document.body.removeChild(zone);
        if (ok) { resolve(); } else { reject(new Error('Copie impossible')); }
      } catch (err) {
        document.body.removeChild(zone);
        reject(err);
      }
    });
  }

  /* Bouton « Copier » à côté de chaque adresse e-mail. */
  function construireCopieEmail() {
    var liens = document.querySelectorAll('a[href^="mailto:"]');
    Array.prototype.forEach.call(liens, function (lien) {
      var bouton = document.createElement('button');
      bouton.type = 'button';
      bouton.className = 'copy-email';
      bouton.textContent = 'Copier';
      bouton.setAttribute('aria-label', "Copier l'adresse e-mail");
      lien.parentNode.insertBefore(bouton, lien.nextSibling);

      var minuterie = null;
      bouton.addEventListener('click', function () {
        var adresse = lien.getAttribute('href').replace('mailto:', '');
        copierTexte(adresse).then(function () {
          bouton.textContent = 'Copié !';
          bouton.setAttribute('aria-label', 'Adresse e-mail copiée');
          if (minuterie) { clearTimeout(minuterie); }
          minuterie = setTimeout(function () {
            bouton.textContent = 'Copier';
            bouton.setAttribute('aria-label', "Copier l'adresse e-mail");
          }, 2000);
        }).catch(function () {
          // Repli : on sélectionne l'adresse pour une copie manuelle.
          var selection = window.getSelection();
          var plage = document.createRange();
          plage.selectNodeContents(lien);
          selection.removeAllRanges();
          selection.addRange(plage);
        });
      });
    });
  }

  function init() {
    construireRetourHaut();
    construireCopieEmail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
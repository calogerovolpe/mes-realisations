/* Volpe Calogero — Mes réalisations administratifs — accordéons des pages de
   réalisation. Les sections « Contexte · Méthode · Résultat · Ce que cela
   démontre » utilisent les balises natives <details>/<summary> (elles
   fonctionnent donc sans JavaScript). Ce script ajoute seulement le confort :
   des boutons « Tout déplier / Tout replier », et l'ouverture de tous les
   volets avant impression pour ne rien masquer sur le papier. */
(function () {
  'use strict';

  function init() {
    var volets = Array.prototype.slice.call(
      document.querySelectorAll('details.volet')
    );
    // Aucun volet sur cette page : aucun bouton, aucun effet.
    if (volets.length === 0) { return; }

    /* Boutons « Tout déplier / Tout replier », insérés avant le premier volet. */
    var outils = document.createElement('div');
    outils.className = 'volets-outils';

    var boutonOuvrir = document.createElement('button');
    boutonOuvrir.type = 'button';
    boutonOuvrir.className = 'volet-btn';
    boutonOuvrir.textContent = 'Tout déplier';
    boutonOuvrir.addEventListener('click', function () {
      Array.prototype.forEach.call(volets, function (v) { v.open = true; });
    });

    var boutonFermer = document.createElement('button');
    boutonFermer.type = 'button';
    boutonFermer.className = 'volet-btn';
    boutonFermer.textContent = 'Tout replier';
    boutonFermer.addEventListener('click', function () {
      Array.prototype.forEach.call(volets, function (v) { v.open = false; });
    });

    outils.appendChild(boutonOuvrir);
    outils.appendChild(boutonFermer);
    volets[0].parentNode.insertBefore(outils, volets[0]);

    /* Impression : ouvrir tous les volets (pour ne rien masquer), puis
       restaurer l'état d'origine à la fermeture de la boîte d'impression. */
    var mqImpression = window.matchMedia && window.matchMedia('print');
    function majImpression(e) {
      Array.prototype.forEach.call(volets, function (v) {
        if (e.matches) {
          v.setAttribute('data-volet-ouvert', v.open ? '1' : '0');
          v.open = true;
        } else {
          v.open = (v.getAttribute('data-volet-ouvert') === '1');
        }
      });
    }
    if (mqImpression) {
      if (mqImpression.addEventListener) {
        mqImpression.addEventListener('change', majImpression);
      } else if (mqImpression.addListener) {
        mqImpression.addListener(majImpression); // anciens navigateurs
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
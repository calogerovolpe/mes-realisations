# techContext.md

Langages : HTML5, CSS3, JavaScript vanilla (accord explicite de la refonte).
JavaScript autorisé UNIQUEMENT en amélioration progressive : le contenu reste
lisible et navigable JavaScript désactivé.
Contraintes JavaScript : point d'entrée unique en defer ; moins de 15 Ko non
minifié ; aucun script bloquant le rendu ; tout désactiver si
prefers-reduced-motion: reduce.
Aucun : framework, build, npm, CDN, police externe, analytics, cookie, script tiers.

Fichiers de style : assets/css/style.css (global), assets/css/print.css (impression).
Fichiers de script : assets/js/main.js (entrée), nav.js, print.js, search.js, reveal.js.

Hébergement : GitHub Pages, dépôt public « mes-realisations ».
Refonte : développement sur la branche « refonte » ; publication sur la branche
main après chaque jalon (dossier / (root)). JAMAIS /docs.

Versionnage : git. Push obligatoire à la fin de chaque jalon et après chaque
modification significative. git status doit être propre avant d'annoncer un jalon fini.

Sources de référence : dossier /docs local, LECTURE SEULE, jamais publié,
présent dans le .gitignore.
Contenu de /docs : fichiers Excel, PDF, Word, plus les fichiers de règles
00-regles-publication.md, 01-inventaire-projets.md, 02-regles-images.md.

Outils de production : Cline dans VS Code pour le code ; captures d'écran
Windows (Win + Shift + S) pour les images.

Contraintes de performance
Page lisible sur téléphone (375 px), images < 300 Ko, aucune ressource externe
chargée.

Accessibilité
Structure sémantique, un seul h1 par page, navigation clavier et focus visible,
contraste AA minimum, aria-expanded sur les accordéons, aria-live sur le compteur
de résultats, métadonnées par page (title unique, description, Open Graph).

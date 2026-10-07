# systemPatterns.md

Structure
Pages HTML à plat à la racine. CSS partagé (assets/css/style.css, plus
assets/css/print.css pour l'impression). JavaScript vanilla en fichiers séparés
sous assets/js/ (main.js, nav.js, print.js, search.js, sommaire.js,
global-search.js), chargés en defer depuis un point d'entrée unique.
Aucun gabarit serveur, aucun include : la navigation, la carte de visite et le
pied de page sont recopiés à l'identique dans chaque page (et doivent le rester).

Navigation
Accueil · Excel · Business plans · Identité visuelle · Parcours · Contact.
Navigation collante en haut au défilement ; le lien de la section visible est
surligné.

Recherche globale
Raccourci Ctrl+K (Cmd+K sur Mac), plus un bouton « Rechercher » injecté en fin de
navigation par global-search.js. Panneau (role="dialog") créé par JavaScript,
donc sans effet JavaScript désactivé. L'index des pages (titre, url, section,
résumé) est embarqué dans assets/js/global-search.js : le mettre à jour quand une
page est ajoutée ou renommée.

Carte de visite (en-tête de chaque page)
Nom « Volpe Calogero », positionnement, e-mail de contact, bouton « Imprimer ».
Le nom du propriétaire est la marque personnelle du portfolio (autorisé partout).

Composants réutilisables
- Carte de réalisation : titre, contexte, méthode, résultat, ce que cela démontre.
- Bloc « onglets » en CSS pur (input radio + labels) pour les pages de modèles.
- Bloc compétences (liste de 4 à 6 lignes courtes).
- Bloc de réalisation dépliable (<details>/<summary>) avec boutons
  « tout déplier / tout replier ».
- Bandeau de contact en fin de page.
- Pied de page identique partout (texte exact dans .clinerules/04) + date de
  dernière mise à jour.

Organisation des contenus
- Une réalisation = une page dédiée, toujours au même format.
- Deux pages sommaire (excel.html, business-plan.html) qui listent les cartes.
- Les pages sommaire portent la phrase d'introduction imposée.
- Les captures d'écran vivent dans assets/img/ et sont référencées en relatif.
- Amélioration progressive : le contenu reste intégralement présent dans le HTML
  (lisible et navigable JavaScript désactivé) ; le JS n'ajoute que du confort.

Cohérence
Toute page nouvelle doit être ajoutée à la navigation de toutes les pages
existantes dans le même commit.
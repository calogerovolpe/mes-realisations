# activeContext.md

Refonte « Volpe Calogero — Mes réalisations administratifs » engagée (2026).
Jalon en cours : R9 — Recette finale et clôture — terminé, fusionné dans `main`
et publié. La refonte R0 → R9 est clôturée. Points dépendant du propriétaire
listés plus bas (formulaire Formspree, budget JS, deux /docs, captures).
Règle : un jalon de refonte = une seule conversation = un commit ; ne jamais
traiter deux jalons à la fois. Publication sur `main` après chaque jalon.

Décisions verrouillées (brief de refonte)
- Titre du site : « Volpe Calogero — Mes réalisations administratifs ».
- Nom du propriétaire « Volpe Calogero » autorisé PARTOUT (marque personnelle).
- Ordre fixé : « Volpe Calogero » (prénom puis nom).
- JavaScript vanilla autorisé en amélioration progressive ; .clinerules/04 révisée.
- Workflow : branche `refonte` → merge `main` → push, à la fin de CHAQUE jalon.

Corrections de contenu appliquées en R1 (faites)
- Titre remplacé partout (title, h1, fil d'Ariane, métadonnées).
- Formation : afficher CESS + TOUS les diplômes (plus récent d'abord, CESS en fin
  de bloc) : STUDI 2025-2026 ; Edith & Nous 2025 ; AFPA 12 2021-2022 ; Faculté de
  philosophie Saint-Louis 2015-2016 ; Saint Luc 2001-2007 ; CESS Cardinal Mercier
  2014. La Faculté de philosophie est conservée.
- Freelance (2021-2025) réinséré entre Elior et Conforama, fond coloré léger,
  texte au survol/focus : « Activité micro-entreprise exercée le week-end pendant
  les contrats, avec l'autorisation de la hiérarchie. »
- SuperProf (cours AutoCAD, 2023-2024, en freelance) intégré au bloc freelance.
- Ville de Montreuil : formulation corrigée (archivage, référent « plans bâtiment »,
  20+ plans mis à jour, 3 études de faisabilité) + « Outils : AutoCAD, SketchUp. »
  (pas de Revit).
- Chiffres identiques partout : 10 collaborateurs · 600 couverts/jour · 40 clients ·
  20+ plans · 3 études de faisabilité · 9 tableaux croisés dynamiques (à recouper
  avec /docs, règle de source unique).
- Photo : docs/photo Volpe Calogero.jpg → assets/img/photo-profil.jpg,
  alt neutre « Portrait ».

Étapes du jalon R0 (faites)
1. Branche `refonte` créée.
2. .clinerules/02 (nom partout), 04 (JavaScript), 03 (workflow refonte),
   01 (titre, arborescence, jalons) révisées.
3. memory-bank réécrite (6 fichiers) + checklist R0–R8.

Étapes du jalon R3 (faites)
- assets/css/style.css : en-tête collant (position: sticky, top: 0, z-index: 20)
  + scroll-padding-top: 7rem (ancres internes non masquées) + styles .back-to-top
  et .copy-email.
- assets/css/print.css : .back-to-top et .copy-email masqués à l'impression.
- assets/js/main.js : chargement de nav.js après print.js.
- assets/js/nav.js (nouveau) : retour en haut (affiché après 400 px) et copie de
  l'e-mail (navigator.clipboard + replis, retour « Copié ! » 2 s).
- Page courante : surlignage statique conservé (aria-current). Scroll-spy reporté
  à R6.
- Fusionné dans `main`, publié (nav.js HTTP 200). Poids JavaScript total ~6,4 Ko.

Étapes du jalon R4 (faites)
- assets/js/search.js (nouveau) : barre de recherche + filtres par catégorie sur
  excel.html (injectés par JavaScript), compteur de résultats (« X fonctions
  affichées ») et message « Aucun résultat ».
- assets/js/main.js : chargement de search.js après nav.js.
- assets/css/style.css : styles .recherche, .recherche-champ, .recherche-filtres,
  .filtre-btn, .recherche-compteur et masquage .est-masque.
- assets/css/print.css : .recherche masqué à l'impression.
- Boutons de catégorie dérivés des titres des groupes (7) + bouton « Tous ».
- Filtrage insensible à la casse et aux accents ; groupes vides masqués.
- Fusionné dans `main`, publié (search.js HTTP 200). Poids JavaScript total ~11,4 Ko.

Étapes du jalon R5 (faites puis annulées)
- Les 8 pages de réalisation avaient été converties en accordéons <details>/<summary>
  (Contexte, Méthode, Résultat, Ce que cela démontre).
- DÉCISION : rendu jugé inadapté par le propriétaire — accordéons RETIRÉS. Les 8
  pages, style.css, print.css et main.js restaurés à leur état d'avant R5
  (git checkout 370f372) ; assets/js/accordion.js supprimé. Sections revenues en
  <h2> simples. Poids JS total ~11,4 Ko.

Étapes du jalon R6 (faites)
- assets/js/sommaire.js (nouveau) : sommaire automatique des <h2> visibles (≥ 3),
  ancres générées sans écraser les ids existants, défilement doux, surlignage de
  la section affichée (IntersectionObserver, aria-current).
- assets/js/main.js : chargement de sommaire.js après search.js.
- assets/css/style.css : styles .sommaire / .sommaire-titre.
- assets/css/print.css : .sommaire masqué à l'impression.
- Périmètre resserré : compteurs animés et apparition au défilement écartés.
- Aucun fichier HTML modifié. Fusionné dans `main`, publié (sommaire.js HTTP 200).
  Poids JS total ~14,6 Ko.

Étapes du jalon R7 (faites)
- Métadonnées : huit balises Open Graph ajoutées dans le <head> des 15 pages
  (og:type, og:site_name, og:locale, og:title, og:description, og:url) — og:url
  absolue (racine du dépôt pour l'accueil).
- Date de dernière mise à jour ajoutée dans le pied de page des 15 pages
  (`<p class="maj">`, masquée à l'impression avec le reste du pied de page).
- Mode sombre automatique via `@media (prefers-color-scheme: dark)` (palette
  « papier sombre chaud », contraste AA) ; `color-scheme: light dark` sur :root ;
  variable `--fond-champ` introduite pour les champs de saisie.
- Accessibilité : lien d'évitement « Aller au contenu » (`.skip-link`) + `id="contenu"`
  sur <main> des 15 pages ; garde `@media (prefers-reduced-motion: reduce)`.
- Aucun fichier JavaScript modifié : poids JS inchangé (~14,6 Ko). style.css et
  print.css sont les seuls fichiers d'assets modifiés.

Étapes du jalon R7b (faites)
- Nouveau sommaire « Identité visuelle » : identite-visuelle.html (phrase
  d'introduction + deux cartes). La navigation « Identité visuelle » des 15 pages
  pointe désormais vers ce sommaire ; les sous-pages du secteur (design-charte.html,
  design-charte-mascotte.html) portent aria-current="page".
- Nouvelle réalisation : design-charte-mascotte.html — charte graphique de
  l'association RÉELLE L'îlot Câlins, présentée avec son autorisation (structure
  imposée : Titre → Contexte → Méthode → Résultat → Ce que cela démontre ; fil
  d'Ariane « Identité visuelle — L'îlot Câlins »). Deux tableaux de synthèse
  (palette en hexadécimal ; typographies) + six planches JPEG (< 300 Ko) : logo,
  couleurs, deux typographies, lignes courbées, mascottes.
- Méthode capture : pages du PDF source rendues en images (PyMuPDF, 150 dpi) puis
  recadrées (rectangle haut/bas) pour retirer le bandeau d'en-tête et le numéro de
  page ; JPEG qualité 88 (Pillow). La page 10 du PDF (coordonnées et nom du studio)
  est EXCLUE, comme tout nom de studio : seules les pages 3, 4, 5, 6, 7 et 9 sont
  reprises. Contrairement aux autres marques, L'îlot Câlins n'est pas une marque
  inventée — l'association est réelle, la charte est diffusée avec sa permission.
- Fil d'Ariane de design-charte.html reciblé (« Identité visuelle — Casa Urpi »).
  Le lien « dossier lié » de excel-modele-02 (coût matière Casa Urpi) reste pointé
  vers design-charte.html (et non le sommaire).
- parcours.html : photo de profil intégrée (assets/img/photo-profil.jpg, 478×480,
  ~45 Ko, alt neutre « Portrait ») dans un <figure class="photo-profil"> — centrée
  sur mobile, flottante à droite dès 44rem, incluse à l'impression (CV).
- style.css : règle .photo-profil (+ @media min-width 44rem). Aucun fichier
  JavaScript modifié (poids JS inchangé ~14,6 Ko).
- mentions-legales.html : mention ajoutée — la charte L'îlot Câlins porte sur une
  association réelle, diffusée avec son autorisation.
- Recherche des noms interdits : aucune occurrence dans les fichiers publiés.

Points ouverts
- Aucun bloquant. Micro-points (orthographe du texte de survol, nom du fichier
  photo, recoupement des chiffres) traités ou à valider en R1.

Rappel
- /docs : lecture seule, jamais publié, dans le .gitignore.
- Le portfolio publié reste « Mes réalisations » tant que R1 n'est pas fusionné.

--- Historique (jalons J0–J6, avant refonte) ---

Dernière action : J4 terminé, en deux volets.

1) Liaisons entre réalisations. Composant « dossier lié » ajouté (CSS .dossier,
   .dossier-label, .dossier-link, .card-meta) et navigation croisée en place :
   bp-etude-01 ↔ excel-modele-01 (Mensana), bp-etude-02 ↔ excel-modele-03
   (L'Appartement), excel-modele-02 ↔ design-charte.html (Casa Urpi). Les phrases
   de renvoi en prose deviennent des liens ; les cartes des sommaires portent une
   mention « associé ». bp-etude-03 (Al Dante) et bp-etude-04 (Eathic) n'ont pas
   de modèle Excel : aucun lien croisé, volontairement.

2) Identité visuelle. design-charte.html créée (marque Casa Urpi) à partir de
   « Charte graphique.pdf » (15 pages). Quatre planches JPEG (< 300 Ko) :
   charte-logo, charte-palette, charte-segments, charte-typographie. Deux tableaux
   de synthèse (palette avec codes hexadécimaux ; typographies), valeurs
   explicites du document. En ligne, vérifié (HTTP 200).

Méthode capture charte : pages rendues en images (PyMuPDF, 150 dpi) puis recadrées
(rectangle) pour retirer barre bleue, en-tête (e-mail, URL casaurpi.fr, numéro de
page) et barres latérales ; redimensionnées à 1500 px de large (Pillow), JPEG
qualité 88.

Nouveaux fichiers /docs non publiés :
- Un PDF de charte graphique dont le nom de fichier révélait une marque réelle
  (hors liste des marques inventées autorisées) : NON publié, en attente de
  décision du propriétaire. Le nom réel n'est pas recopié ici (confidentialité).
- « Faisa 2 epinay Travail en cours (1).pdf » → document de travail scanné (aucun
  texte extractible) : différé.

Décision de confidentialité : .clinerules/ (noms réels) et /docs/ sont exclus de la
publication via .gitignore. Le dépôt public ne contient que .gitignore, README.md,
index.html, les pages HTML, assets/ et memory-bank/.

Rappel technique (exécutions antérieures) : documents sources lus sans Word (DOCX
via le XML interne, PDF via pypdf) ; captures J3a par la fenêtre Word (PrintWindow),
captures J3b et J4 par rendu PDF (PyMuPDF) + Pillow.

Dernière action : J6 — contact.html créée (formulaire via service tiers Formspree
+ case de consentement obligatoire ; e-mail de contact unique ; le nom du
propriétaire figure ici et sur parcours.html uniquement) et mentions-legales.html
créée (éditeur, hébergeur GitHub Pages, propriété intellectuelle, données
personnelles et confidentialité, assistance IA « assistées par IA, relues et
corrigées », absence de téléchargement). Styles de formulaire ajoutés au CSS.
Le memory-bank est corrigé : plus aucune mention du nom du propriétaire.

Étapes du jalon R8 (faites)
- assets/js/global-search.js (nouveau) : recherche globale. Raccourci Ctrl+K
  (Cmd+K sur Mac), plus un bouton « Rechercher Ctrl K » injecté en fin de
  navigation. Panneau role="dialog" aria-modal : champ, liste de résultats,
  navigation clavier (↑/↓, Entrée, Échap), piège de focus, restauration du focus
  et compteur aria-live. Correspondance insensible à la casse et aux accents ;
  index de 17 pages (titre, url, section, résumé) embarqué dans le fichier ;
  sans JavaScript, aucun effet (amélioration progressive).
- assets/js/main.js : chargement de global-search.js (après sommaire.js).
- assets/css/style.css : styles .rg-* (bouton, panneau, champ, résultats) —
  variables existantes, donc mode sombre automatique ; aucune animation.
- assets/css/print.css : .rg-overlay masqué à l'impression.
- Limite JavaScript portée de 15 à 21 Ko (.clinerules/04, techContext.md) ;
  poids total ~20,75 Ko. Fusionné dans main, publié.

Étapes du jalon R9 (faites) — recette finale et clôture
- Audit automatisé des 17 pages : lang="fr", un seul <h1>, <title> et
  <meta description> uniques, Open Graph complet, navigation identique +
  aria-current, lien d'évitement + id="contenu", pied de page au texte exact +
  date, aucun lien mort, alt présent et images < 300 Ko. Aucun écart.
- Transversal : aucune ressource externe (hors Formspree et og:url), encodage
  UTF-8 sans BOM et fins de ligne CRLF partout, recherche des noms interdits sans
  occurrence. Les fichiers locaux .gitignore.md et arboresence.md sont bien
  ignorés (non publiés).
- Aucune correction nécessaire. Refonte R0 → R9 clôturée.

Points ouverts

- E-mail de contact unique publié sur les pages Contact et Parcours (adresse
  dédiée, la même que celle indiquée sur le CV). Aucune adresse inventée.
- Pages contact.html et mentions-legales.html créées (J6) : la navigation et le
  pied de page ne comportent plus de lien mort. La page 404.html est en place
  (statut 404 + contenu personnalisé) ; un marqueur .nojekyll est présent.
- Endpoint du formulaire : l'attribut action pointe vers Formspree ; l'identifiant
  (f/…) reste à renseigner par le propriétaire (« VOTRE_ID » dans contact.html).
- Budget JavaScript : limite portée à 21 Ko en R8 ; confirmation du propriétaire
  en attente (21 Ko conservé, ou retour à 20 Ko en retirant la description des
  résultats ou le piège de focus).
- Incident GitHub Actions résolu : service repassé en « operational » ; le build
  du commit J6 publie l'ensemble des pages (dont parcours.html resté en file).
- ANCHORARRAY est écrit tel quel (opérateur de plage déversée) ; aucune traduction
  française imposée.
- Le document Eathic intitule « optimiste » la page de calcul du ROI du scénario
  moyen : la page publiée retient la correspondance montants → scénario
  (25,24 % pessimiste / 26,48 % moyen / 47,95 % optimiste).
- Captures générées automatiquement : à vérifier visuellement par le propriétaire.

Blocages

- Aucun.

Rappel
Aucun projet décrit dans /docs n'existe. Les noms commerciaux sont inventés.
Aucune question à poser au propriétaire à ce sujet.

# activeContext.md

Refonte « Volpe Calogero — Mes réalisations administratifs » engagée (2026).
Jalon en cours : R4 — Recherche des fonctions (terminé, fusionné dans `main` et publié).
Prochain jalon : R5 — Accordéons (`<details>`/`<summary>` et « tout déplier / tout
replier »).
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
- « Charte graphique lilot calin.pdf » → marque réelle apparente (« L'îlot
  Câlins »), hors liste des marques inventées autorisées : NON publiée, en attente
  de décision du propriétaire.
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

Points ouverts

- E-mail de contact unique publié sur les pages Contact et Parcours (adresse
  dédiée, la même que celle indiquée sur le CV). Aucune adresse inventée.
- Pages contact.html et mentions-legales.html créées (J6) : la navigation et le
  pied de page ne comportent plus de lien mort. La page 404.html est en place
  (statut 404 + contenu personnalisé) ; un marqueur .nojekyll est présent.
- Endpoint du formulaire : l'attribut action pointe vers Formspree ; l'identifiant
  (f/…) reste à renseigner par le propriétaire (« VOTRE_ID » dans contact.html).
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

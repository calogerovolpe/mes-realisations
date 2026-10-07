# progress.md

- [x] J0 — Fondations : arborescence, .clinerules, memory-bank, .gitignore,
      dépôt GitHub public, GitHub Pages activé, index.html minimal en ligne
- [x] J1 — Accueil : index.html complet (présentation, quatre cartes de
      section, pied de page imposé), responsive
- [x] J2a — Excel gabarit : excel.html (sommaire + index des fonctions) et
      modèle 01 « Mensana » avec onglets CSS
- [x] J2b — Excel suite : modèle 02 « Casa Urpi » (coût matière) et modèle 03
      « L'Appartement » (investissement, financement, BFR)
- [x] J3a — Business plan gabarit : business-plan.html + étude 01
- [x] J3b — Business plan suite : études 02, 03 et 04
- [x] J4 — Liaisons et identité visuelle : navigation croisée business plans ↔
      modèles Excel ↔ charte, design-charte.html (Casa Urpi)
- [x] J5 — Parcours : parcours.html (présentation et version imprimable en CV)
- [x] J6 — Contact et finitions : contact.html, mentions-legales.html,
      test mobile, contrôle final des noms interdits

## Refonte 2026 — « Volpe Calogero — Mes réalisations administratifs »
Développement sur la branche `refonte` ; publication sur `main` après CHAQUE jalon.
Un jalon de refonte = une conversation = un commit. Ne jamais traiter deux jalons
de refonte à la fois.

- [x] R0 — Cadrage et sécurité : branche `refonte` ; révision des .clinerules
      (nom « Volpe Calogero » autorisé partout, JavaScript vanilla autorisé,
      workflow de refonte, titre et jalons) ; réécriture de la memory-bank
- [x] R1 — Contenu (aucun JavaScript) : titre du site partout (15 pages :
      en-tête + title ; h1 de l'accueil ; nom « Volpe Calogero » ; README,
      style.css) ; parcours (formation complète, freelance + SuperProf,
      Montreuil AutoCAD/SketchUp, ordre chronologique) ; chiffres unifiés
- [x] R2 — Impression : boutons « Imprimer » / « PDF » (injectés par JS) ;
      assets/css/print.css (chargée en media="print") ; assets/js/main.js +
      print.js
- [x] R3 — Navigation : en-tête collant (CSS pur), retour en haut, copie de
      l'e-mail (boutons injectés par JavaScript)
- [x] R4 — Recherche des fonctions : filtres et recherche instantanée (excel.html)
- [ ] R5 — Accordéons : ABANDONNÉ (accordéons <details>/<summary> retirés à la demande du propriétaire ; sections des pages de réalisation revenues en titres simples)
- [x] R6 — Dynamisme : sommaire automatique et scroll-spy (compteurs animés et apparition au défilement écartés, jugés superflus)
- [x] R7 — Finitions : Open Graph, accessibilité (lien d'évitement), mode sombre
      automatique, date de dernière mise à jour
- [x] R7b — Contenus complémentaires : sommaire « Identité visuelle »
      (identite-visuelle.html) ; charte graphique de l'association réelle L'îlot
      Câlins (design-charte-mascotte.html) ; photo de profil dans parcours.html
- [x] R8 — Bonus : recherche globale Ctrl+K (global-search.js ; raccourci
      Ctrl+K/Cmd+K + bouton « Rechercher » ; limite JS portée à 21 Ko)
- [x] R9 — Recette finale et clôture : audit automatisé des 17 pages (0 écart),
      aucune ressource externe, encodage/CRLF et noms interdits conformes

## Journal
- 2026-10-05 · J0 · Dépôt public créé, GitHub Pages activé (branche main,
  dossier / root), page d'accueil en ligne vérifiée (build « built », HTTP 200).
- 2026-10-05 · J1 · Accueil enrichi : présentation, quatre cartes de section
  (Excel, business plans, identité visuelle, parcours), pied de page imposé
  conservé. Lien « Contact » conservé (adresse e-mail non fournie). En ligne.
- 2026-10-05 · J2a · Sommaire Excel (excel.html) et page modèle 01
  (excel-modele-01-rentabilite.html) créés, avec onglets en CSS pur et deux
  tableaux de synthèse. Quatre captures générées depuis le classeur source via
  automatisation Excel ; le détail charges/loyers/financement reste en images.
- 2026-10-05 · J2a (révisé) · Modèle 01 remplacé : « Calcul (100 couverts) » →
  « Mensana - SMALL.xlsx » (feuilles Paramètres, Ventes, Bénéfice, Bénéfice
  prévisionnel, Personnel, Financement de départ, 9 tableaux croisés dynamiques).
  Ajout d'un index des fonctions sur excel.html ; onglets retravaillés (fond
  coloré léger sur l'onglet actif) ; captures régénérées. Feuilles sensibles
  (Actionnaires, Financement de départ, Personnel, Planning, Liste d'ingredients)
  exclues des textes et des captures publiées.
- 2026-10-05 · J2b · Pages excel-modele-02-cout-matiere.html (marque « Casa Urpi »)
  et excel-modele-03-investissement.html (marque « L'Appartement ») créées à
  partir des classeurs « Fiche technique » (.xlsx et .xlsm) et « Epinay
  L'appartement.xlsx ». Treize captures générées depuis les feuilles sûres via
  automatisation Excel. Feuilles exclues non publiées : Mercuriale (URLs
  fournisseurs, prénom interdit) ; Articles, Commande et Actionnaires (URLs,
  prénoms interdits, apports/dividendes/prêts). Les 2 tableaux croisés dynamiques
  du modèle 03 sont décrits mais non capturés (hébergés sur Articles et Commande).
  Lien externe du modèle 03 non publié (mention générique). Ancres de l'index des
  fonctions d'excel.html activées. En ligne, vérifié.

- 2026-10-05 · J3a · Sommaire « Business plans » (business-plan.html) et étude 01
  (bp-etude-01-restauration-saine.html, marque « Mensana ») créés à partir de
  « Business plan court.docx » (version Word non chiffrée du document source).
  Quatre captures produites par capture d'écran de la fenêtre Word (API Win32
  PrintWindow, l'export PDF de Word étant inopérant dans cet environnement) :
  sommaire, étude de marché, analyse des recherches Google, zone d'implantation.
  Exclus des textes et des images : la couverture (nom du propriétaire), la
  section « Mes conseillés directs » (noms de personnes réelles) et la phrase
  contenant l'adresse exacte du local. Trois tableaux de synthèse (marché, zone
  de chalandise, concurrence/employeurs) reprennent uniquement les valeurs
  explicites du document (Agence BIO, IFOP, ADEME/GreenFlex, Google Keyword
  Planner, SemRush). Le document ne contient aucun état financier : aucune
  projection n'a été inventée, le renvoi vers le modèle d'exploitation Excel est
  explicite. En ligne, vérifié (HTTP 200).
- 2026-10-05 · J3b · Trois études créées selon le gabarit exact de l'étude 01 :
  bp-etude-02-cafe-restaurant.html (« L'Appartement », source « Business plan.docx »),
  bp-etude-03-restauration-artisanale.html (« Al Dante », source « Business plan.pdf »)
  et bp-etude-04-restauration-emporter.html (« Eathic « To-Go » », source « Business
  plan Eathic.pdf »). business-plan.html passe à quatre cartes. Sources lues sans
  Word : DOCX via le XML interne (System.IO.Compression), PDF via la bibliothèque
  Python pypdf. Captures générées en rendant les pages PDF en images (PyMuPDF) puis
  recadrées (Pillow) pour retirer le bandeau « nom + adresse » d'Al Dante et le pied
  de page « nom » d'Eathic ; images sous 300 Ko, apostrophes droites. Exclus des
  textes et des images : couvertures (nom du propriétaire), sections « Qui suis-je »
  et « conseillers » (noms de personnes réelles) et pages concurrentielles nommant
  des enseignes réelles. Concurrents réels désignés génériquement, sans nom ni
  jugement. Détails de charges (loyers, salaires, échéanciers) maintenus en images ;
  chiffres limités aux valeurs explicites des documents. En ligne, vérifié (HTTP 200).
- 2026-10-05 · J4 · Deux volets. (1) Liaisons : composant « dossier lié » (CSS
  .dossier, .card-meta) et navigation croisée — bp-etude-01 ↔ excel-modele-01,
  bp-etude-02 ↔ excel-modele-03, excel-modele-02 ↔ design-charte.html ; mentions
  « associé » sur les cartes des sommaires. (2) Identité visuelle : design-charte.html
  (marque Casa Urpi) créée à partir de « Charte graphique.pdf » (15 pages) ; quatre
  planches JPEG < 300 Ko (logo, palette, déclinaisons, typographies) recadrées pour
  retirer l'en-tête (e-mail, URL casaurpi.fr, numéro de page) ; palette et
  typographies en tableaux de synthèse. Nouveaux fichiers non publiés : un PDF de
  charte graphique dont le nom révélait une marque réelle (hors liste autorisée ;
  nom non recopié, confidentialité) et « Faisa 2 epinay… » (travail en cours,
  scanné). En ligne, vérifié (HTTP 200).
- 2026-10-05 · J6 (partiel) · Page 404.html créée (message « Page introuvable »
  et quatre cartes de retour vers les sections du portfolio) et marqueur .nojekyll
  ajouté (site statique, sans traitement Jekyll). Deux builds GitHub Pages annulés
  après des pushes rapprochés ; build final réussi. Page 404 vérifiée en ligne
  (statut 404 avec contenu personnalisé). Reste pour J6 : contact.html (formulaire
  tiers + consentement), mentions-legales.html (en attente de l'e-mail et du
  service de formulaire) et finitions.
- 2026-10-05 · J5 · Page parcours.html créée (CV) à partir du document de CV
  (texte extrait via pypdf) et des compétences démontrées par le portfolio :
  compétences administratives et techniques, savoir-être, formation, expérience
  professionnelle, langues, centres d'intérêt, travaux présentés et contact.
  Retirés car interdits : numéros de téléphone et adresse postale. Le nom du
  propriétaire est limité à parcours.html et contact.html ; le memory-bank n'en
  comporte plus aucune mention (correction apportée en J6). E-mail de contact
  unique (celui du CV) publié sur la page. Mise en page imprimable gérée par la
  règle @media print existante.
- 2026-10-05 · Incident GitHub · Le déploiement (page parcours et mémoire) est
  bloqué par une panne GitHub Actions déclarée « critical » (incident ouvert à
  19:11 UTC : « job failures and delays affecting GitHub-hosted runner assignment
  and workflow start times »). Les jobs « pages build and deployment » restent en
  file, plusieurs builds ayant été annulés ou laissés en attente. Ce n'est pas un
  défaut du dépôt : le fichier est bien présent (raw 200) et se déploiera à la
  reprise du service.
- 2026-10-06 · Incident GitHub résolu · GitHub Actions repassé en état
  « operational » ; le build du commit J6 publie l'ensemble des pages, y compris
  parcours.html resté en file d'attente.
- 2026-10-06 · J6 · contact.html (formulaire via service tiers Formspree + case de
  consentement obligatoire, e-mail de contact unique) et mentions-legales.html
  (éditeur, hébergeur GitHub Pages, propriété intellectuelle, données personnelles
  et confidentialité, assistance IA « assistées par IA, relues et corrigées »,
  absence de téléchargement) créés. Styles de formulaire ajoutés à la feuille de
  style unique. Correction de confidentialité : le nom du propriétaire ne figure
  plus dans le memory-bank ; recherche des noms interdits hors /docs et
  .clinerules : aucune occurrence en dehors de parcours.html et contact.html.
  Vérifié en ligne (HTTP 200 : accueil, parcours, contact, mentions).
- 2026-10-06 · R0 · Refonte engagée (« Volpe Calogero — Mes réalisations
  administratifs »). Branche « refonte » créée. Révision des .clinerules : le nom
  « Volpe Calogero » est autorisé partout (02) ; le JavaScript vanilla en
  amélioration progressive est autorisé (04) ; workflow branche refonte et
  publication par jalon ajouté (03) ; titre, arborescence et jalons de refonte
  mis à jour (01). Réécriture de la memory-bank (projectbrief, productContext,
  systemPatterns, techContext, activeContext, progress) avec les décisions de
  refonte et la checklist R0–R8. Décisions verrouillées : titre exact, nom partout,
  formation complète (CESS inclus), freelance + SuperProf 2023-2024, Montreuil
  AutoCAD + SketchUp, publication après chaque jalon.
- 2026-10-06 · R1 · Contenu (aucun JavaScript). Titre « Volpe Calogero — Mes
  réalisations administratifs » appliqué partout : balise title des 15 pages,
  en-tête (site-title), h1 de l'accueil, commentaire de style.css et README.
  Nom harmonisé en « Volpe Calogero » (parcours h1, contact). parcours.html :
  formation complète (STUDI 2025-2026, Edith & Nous 2025, AFPA 12 2021-2022,
  Faculté de philosophie Saint-Louis 2015-2016, Saint Luc 2001-2007, CESS
  Cardinal Mercier 2014 en fin de bloc) ; freelance (2021-2025) réinséré entre
  Elior et Conforama avec cours AutoCAD via SuperProf (2023-2024) ; ligne
  Montreuil corrigée (référent « plans bâtiment » d'un parc de plus de 400
  bâtiments, 20+ plans mis à jour, 3 études de faisabilité ; outils AutoCAD,
  SketchUp). Chiffres unifiés (10 collaborateurs, 600 couverts, 40 clients,
  20+ plans, 3 études, 9 tableaux croisés dynamiques). Fusionné dans `main`,
  publié. Recherche des noms interdits : rien hors .clinerules et /docs.
- 2026-10-06 · R2 · Impression. Feuille d'impression assets/css/print.css (chargée
  en media="print") : masque en-tête, navigation, pied de page et boutons ; noir
  sur blanc ; break-inside: avoid sur les blocs ; URL des liens affichées (sauf
  ancres internes et e-mail) ; fonds des tableaux et dossiers conservés. Le bloc
  @media print de style.css est retiré (source unique). Boutons « Imprimer cette
  page » et « Télécharger en PDF » (tous deux window.print()), injectés par
  JavaScript : point d'entrée assets/js/main.js (defer, script unique) qui charge
  assets/js/print.js (scripts classiques, compatibles file://). Les liens print.css
  et main.js sont ajoutés aux 15 pages. Fusionné dans main, publié.
  Incident résolu : le git checkout main a été bloqué par un verrou lors de la
  suppression du dossier assets/js ; contourné par git branch -f main refonte
  (mise à jour équivalente, sans changement de branche) + nettoyage de l'index.
- 2026-10-07 · R3 · Navigation. En-tête collant en CSS pur (position: sticky,
  top: 0, z-index: 20 sur .site-header) et scroll-padding-top: 7rem pour que les
  ancres internes des pages modèles (#formules, #f-somme, #tcd…) ne passent pas
  sous l'en-tête. Bouton « retour en haut » (affiché après 400 px de défilement,
  remontée douce — behavior: auto si prefers-reduced-motion) et bouton « Copier »
  à côté de chaque adresse e-mail, tous deux injectés par JavaScript dans le
  nouveau fichier assets/js/nav.js, chargé après print.js par main.js. Copie via
  navigator.clipboard avec replis (textarea + execCommand, puis sélection du
  texte) et retour visuel « Copié ! » pendant 2 s. Les deux boutons sont masqués
  à l'impression (print.css). Le surlignage de la page courante reste statique
  (aria-current) ; le scroll-spy est reporté à R6. Fusionné dans main, publié
  (nav.js HTTP 200). Poids JavaScript total : ~6,4 Ko (limite : 15 Ko).
- 2026-10-07 · R4 · Recherche des fonctions. Barre de recherche et filtres
  ajoutés par JavaScript (assets/js/search.js, chargé après nav.js par main.js)
  au-dessus de l'index des fonctions d'excel.html — aucun fichier HTML modifié.
  Champ de recherche (filtrage instantané, insensible à la casse et aux accents),
  7 boutons de catégorie dérivés des titres <h3> des groupes + bouton « Tous »
  (aria-pressed), compteur de résultats (role=status, aria-live) et message
  « Aucun résultat ». Filtrage sur le texte complet de chaque entrée (nom de
  fonction + références modèles) ; groupes devenus vides masqués. La barre est
  masquée à l'impression. Sans JavaScript, l'index complet reste affiché.
  Vérifié en local (simulation Node sur excel.html) : 7 groupes / 17 entrées,
  « RECHERCHEX » → 1 résultat, « Tableaux dynamiques » → 4, « Somme et
  agrégation » → 3, « zzz » → Aucun résultat. Fusionné dans main, publié
  (search.js HTTP 200). Poids JavaScript total : ~11,4 Ko (limite : 15 Ko).
- 2026-10-07 · R5 · Accordéons. Les 8 pages de réalisation (3 modèles Excel,
  4 business plans, 1 charte) ont leurs 4 sections « Contexte · Méthode ·
  Résultat · Ce que cela démontre » transformées en accordéons natifs
  <details class="volet">/<summary> (fermés par défaut). Contenu intégralement
  conservé — vérifié par comparaison du texte pur avant/après transformation.
  La section « Fonctions et formules utilisées » des pages Excel reste hors
  accordéon (ancres #formules, #f-*, #tcd préservées). Boutons « Tout déplier /
  Tout replier » injectés par JavaScript (assets/js/accordion.js, chargé après
  search.js par main.js) ; ouverture automatique de tous les volets avant
  impression (matchMedia('print')) puis restauration de l'état d'origine.
  Styles .volet dans style.css ; boutons masqués et rendu « document » à
  l'impression (print.css). Fonctionne sans JavaScript (balises natives).
  Fusionné dans main, publié (accordion.js HTTP 200). Poids JavaScript total :
  ~14,1 Ko (limite : 15 Ko — marge réduite pour R6).
- 2026-10-07 · R5 (annulé) · Les accordéons ajoutés aux 8 pages de réalisation
  ont été retirés à la demande du propriétaire (rendu jugé inadapté). Les 8 pages,
  assets/css/style.css, assets/css/print.css et assets/js/main.js sont restaurés à
  leur état d'avant R5 (git checkout 370f372) ; assets/js/accordion.js supprimé et
  sa référence retirée de main.js. Les sections « Contexte · Méthode · Résultat ·
  Ce que cela démontre » redeviennent des <h2> simples. Fusionné dans main,
  publié. Poids JavaScript total ramené à ~11,4 Ko.
- 2026-10-07 · R6 · Dynamisme (périmètre resserré). Sommaire automatique de page
  ajouté par JavaScript (assets/js/sommaire.js, chargé après search.js par
  main.js) — aucun fichier HTML modifié. Sur les pages à au moins 3 <h2> visibles
  (parcours.html, les 8 pages de réalisation, mentions-legales.html), un sommaire
  cliquable est inséré avant le premier titre : ancres créées à la volée (sans
  écraser les ids existants #formules/#f-*/#tcd), défilement doux (saut direct si
  prefers-reduced-motion) et surlignage de la section affichée (scroll-spy via
  IntersectionObserver, aria-current). Styles .sommaire dans style.css ; sommaire
  masqué à l'impression (print.css). Les compteurs animés et l'apparition au
  défilement sont écartés (jugés superflus/« gadget »). Fusionné dans main,
  publié (sommaire.js HTTP 200). Poids JavaScript total ~14,6 Ko (limite 15 Ko).
- 2026-10-07 · R7 · Finitions. Huit balises Open Graph (og:type, og:site_name,
  og:locale, og:title, og:description, og:url) ajoutées dans le <head> des 15 pages
  (og:url absolue) ; date « Dernière mise à jour : 7 octobre 2026 » ajoutée au pied
  de page des 15 pages (`<p class="maj">`, masquée à l'impression). Mode sombre
  automatique (`@media (prefers-color-scheme: dark)`, palette « papier sombre
  chaud », contraste AA) ; `color-scheme: light dark` sur :root et variable
  `--fond-champ` pour les champs de saisie. Accessibilité : lien d'évitement
  « Aller au contenu » (`.skip-link`) + `id="contenu"` sur <main> des 15 pages ;
  garde `@media (prefers-reduced-motion: reduce)`. Aucun fichier JavaScript modifié
  (poids JS inchangé ~14,6 Ko) ; style.css (+48 lignes) et print.css (+1 ligne).
  Recherche des noms interdits : aucune occurrence.
- 2026-10-07 · R7b · Contenus complémentaires. (1) Sommaire « Identité visuelle » :
  identite-visuelle.html créé (phrase d'introduction + deux cartes) ; la navigation
  « Identité visuelle » des 15 pages pointe vers ce sommaire ; les sous-pages du
  secteur (design-charte.html, design-charte-mascotte.html) portent aria-current.
  (2) design-charte-mascotte.html : charte graphique de l'association RÉELLE
  L'îlot Câlins, présentée avec son autorisation (structure imposée ; deux tableaux
  de synthèse — palette hexadécimale et typographies ; six planches JPEG < 300 Ko
  recadrées depuis le PDF source via PyMuPDF 150 dpi + Pillow, bandeau d'en-tête et
  numéro de page retirés). La page 10 du PDF (coordonnées et nom du studio) est
  exclue ; aucun nom de studio recopié. mentions-legales.html complété d'une
  mention sur l'association réelle et l'autorisation de diffusion. (3) parcours.html :
  photo de profil intégrée (assets/img/photo-profil.jpg, 478×480, ~45 Ko, alt neutre
  « Portrait ») — centrée sur mobile, flottante à droite dès 44rem, incluse à
  l'impression. style.css : règle .photo-profil. Aucun fichier JavaScript modifié
  (poids JS inchangé ~14,6 Ko). Recherche des noms interdits : aucune occurrence.

- 2026-10-07 · R8 · Bonus — recherche globale. assets/js/global-search.js créé :
  index de 17 pages embarqué, raccourci Ctrl+K/Cmd+K et bouton « Rechercher »
  injecté en fin de navigation ; panneau role="dialog" aria-modal avec champ,
  liste de résultats, navigation clavier (↑/↓, Entrée, Échap), piège de focus,
  restauration du focus et compteur aria-live ; correspondance insensible à la
  casse et aux accents ; amélioration progressive (aucun effet sans JavaScript).
  main.js charge global-search.js ; styles .rg-* dans style.css (mode sombre
  hérité, sans animation) ; .rg-overlay masqué à l'impression (print.css). Limite
  JavaScript portée de 15 à 21 Ko (.clinerules/04, techContext.md) ; poids total
  ~20,75 Ko. Recherche des noms interdits : aucune occurrence. Fusionné dans main,
  publié (global-search.js HTTP 200).

- 2026-10-07 · R9 · Recette finale et clôture. Audit automatisé des 17 pages :
  un seul <h1> par page, lang="fr", <title> et <meta description> uniques, Open
  Graph complet, navigation identique + aria-current, lien d'évitement et
  id="contenu", pied de page au texte exact + date, aucun lien mort, alt présent
  et images < 300 Ko. Transversal : aucune ressource externe (hors Formspree et
  og:url), encodage UTF-8 sans BOM et fins de ligne CRLF partout, recherche des
  noms interdits sans occurrence. Poids JavaScript total 20,75 Ko (limite 21 Ko).
  Aucun écart à corriger. La refonte R0 → R9 est clôturée. Points dépendant du
  propriétaire laissés en l'état : identifiant Formspree « VOTRE_ID »
  (contact.html), confirmation du budget JS, deux documents /docs non publiés
  (PDF charte marque réelle ; « Faisa 2 epinay » différé), relecture visuelle des
  captures.

## Rappel de fin de jalon
git add . → git commit → git push → git status propre → page vérifiée en ligne
→ memory-bank mis à jour et poussé → recherche des noms interdits.
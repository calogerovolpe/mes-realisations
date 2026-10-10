# activeContext.md

Refonte « Volpe Calogero — Mes réalisations administratifs » clôturée (R0 → R9).
Nouvelle phase : retours du propriétaire (2026), traités un par un.
- Retour A — Captures Excel « architecture interne » : TERMINÉ (captures de
  formules, schémas de flux HTML/CSS, nettoyage des images). Fusionné et publié.
- Retour B — Design « modernisation audacieuse » : TERMINÉ (design tokens,
  palette multi-accents, dégradés/ombres doux, micro-animations, impression
  sobre conservée). Fusionné et publié.
- Retour C — Marketing / storytelling : TERMINÉ (accroche, chiffres clés, CTA).
- Retour D — Refonte UI/UX (jalon A) : « vues des feuilles » Excel : TERMINÉ
  (7 captures publiées dans un onglet CSS pur des modèles 01 et 03). Fusionné
  et publié.
- Retour E — Refonte UI/UX (jalon B) : menu latéral + « feuille » : TERMINÉ
  (barre latérale à icônes sur les 17 pages, réductible en CSS pur ; contenu en
  « feuille » sur un plan de travail). Fusionné et publié.
- Retour F — Refonte UI/UX (jalon C) : thème + icône copier : TERMINÉ (bascule
  automatique/clair/sombre mémorisée ; icône copier avec coche). Fusionné et
  publié.
- Retour G — Refonte UI/UX (jalon D) : parcours en ligne de temps unifiée :
  TERMINÉ (colonne unique du plus récent au plus ancien, chapitres coupés par les
  mobilités, étiquettes de catégorie, activité complémentaire en retrait). Fusionné
  et publié.
- Retour H — Parcours : storytelling des transitions : TERMINÉ (notes en italique
  .chrono-note sur les cartes Conforama / Elior / Montreuil / micro-entreprise /
  AFPA / Val-de-Marne ; déménagement 2025 = Guignies, près de Tournai ; Elior
  ramené à 2025 et repositionné avant le retour en Belgique ; superlatifs et
  chiffres personnels retirés). Fusionné et publié.
- Refonte UI/UX : découpage en 3 jalons — A (vues des feuilles Excel, terminé),
  B (menu latéral + « feuille », terminé), C (thème clair/sombre + icône copier,
  terminé). Un jalon = une conversation = un commit.
- Captures Excel : méthode hybride actée — automatisation Excel pour les
  formules et vues de feuilles, captures manuelles du propriétaire pour les
  fenêtres modales (gestionnaire de noms, validation, mise en forme
  conditionnelle).
Règle : un jalon = une seule conversation = un commit ; ne jamais traiter deux
jalons à la fois. Développement sur `refonte`, publication sur `main` après
chaque jalon.

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

Étapes du jalon Retour B (faites) — design « modernisation audacieuse »
- .clinerules/04 : section Design révisée (palette multi-accents, dégradés et
  ombres doux, micro-animations, toutes coupées si prefers-reduced-motion ;
  impression sobre conservée). Règle locale (non publiée).
- assets/css/style.css : design tokens enrichis dans :root (accent principal,
  « résultat » vert sauge, « méthode » bleu encre, dégradés doux, ombres, rayons) ;
  composants modernisés — en-tête en dégradé + ombre, navigation en pastilles
  (état actif en dégradé), cartes à barre d'accent et survol, pied de page en
  bande sombre, tableaux à en-tête coloré et ligne de total en vert sauge,
  onglets CSS actifs en dégradé, schéma de flux, panneau « dossier lié » bleu,
  sommaire en pastilles, formulaire, boutons pleins, portrait, recherche globale.
  Apparition douce du contenu + défilement fluide, tous deux conditionnés à
  prefers-reduced-motion ; jetons accent-2/3 déclinés en mode sombre.
- assets/css/print.css : fonds, ombres et dégradés neutralisés (impression sobre
  noir sur blanc) ; .card::before masqué ; bordures noires ; animation
  d'apparition désactivée à l'impression.
- JavaScript : AUCUN fichier modifié (poids inchangé ~20,75 Ko, sous la limite
  de 21 Ko).
- Vérification par rendu réel (Chrome headless, --virtual-time-budget) : accueil,
  sommaire Excel, modèle 01, parcours et sommaire BP contrôlés en mode clair ET
  sombre, après l'animation d'apparition ; aucun écart.
- Recherche des noms interdits : aucune occurrence.

Étapes du jalon Retour C (faites) — marketing / storytelling
- index.html : accroche sous le <h1> (ligne de positionnement déjà approuvée,
  reprise telle quelle, aucun superlatif ni possessif) ; bande de 6 chiffres clés
  factuels (600 couverts/jour, 10 collaborateurs, 40 dossiers clients, 20+ plans
  mis à jour, 3 études de faisabilité, 4 études de marché) — uniquement des
  données déjà publiées (règle de source unique) ; 3 appels à l'action (Parcours,
  Excel, Contact) sous les cartes.
- assets/css/style.css : composants .accroche, .stats/.stat/.stat-valeur/
  .stat-libelle (chiffres en vert sauge) et .cta/.btn/.btn-secondaire, tous
  fondés sur les design tokens existants (mode sombre hérité, transitions
  coupées si prefers-reduced-motion).
- assets/css/print.css : .cta masqué ; .stat neutralisé (aucun fond ni ombre,
  bordure noire) ; accroche et chiffres clés forcés en noir sur blanc.
- Date « Dernière mise à jour » de l'accueil portée au 8 octobre 2026.
- JavaScript : aucun fichier modifié (poids total inchangé ~20,75 Ko).
- Vérification par rendu réel (Chrome headless) : accueil contrôlé en mode clair
  ET sombre, après l'animation d'apparition ; aucun écart.
- Recherche des noms interdits : aucune occurrence.

Étapes du jalon Retour D (faites) — refonte UI/UX · A : vues des feuilles Excel
- excel-modele-01-rentabilite.html et excel-modele-03-investissement.html :
  ajout d'un onglet CSS pur « Vues des feuilles » (radio #t3 + label + section
  .tab-3) dans « Captures du modèle ». Le CSS des onglets gère déjà #t1..#t4
  (aucune modification CSS nécessaire).
- Modèle 01 : 4 captures — Paramètres, Ingrédients (sommes), Coût matière
  (foodcost), Ventes. Modèle 03 : 3 captures — Horaires, Feuille de ventes,
  Commandes.
- 7 images copiées de /docs vers assets/img/ et renommées : excel-01-parametres,
  excel-01-ingredients, excel-01-foodcost, excel-01-ventes, excel-03-horaire,
  excel-03-feuille-ventes, excel-03-commande (.png, toutes < 300 Ko). /docs non
  modifié, toujours dans .gitignore.
- Alts et légendes neutres (aucun nom de personne). Dates des deux pages portées
  au 8 octobre 2026.
- JavaScript : aucun fichier modifié (poids total inchangé ~20,75 Ko).
- Recherche des noms interdits : aucune occurrence.

Étapes du jalon Retour E (faites) — refonte UI/UX · B : menu latéral + « feuille »
- assets/css/style.css : nouvelle ossature « bureau + feuille ». body en grille
  (barre latérale + contenu) sur fond « bureau » (--bureau) ; .site-sidebar
  (colonne gauche, fond sombre --sidebar-fond, 17rem, sticky 100vh) avec marque,
  navigation verticale à icônes et bascule de repli ; .site-main = « feuille »
  (fond papier, ombre douce, coins arrondis) ; .site-footer prolonge la feuille.
  Jetons ajoutés en clair ET sombre. Nouveaux styles .nav-ico, .nav-libelle,
  .marque-nom, .marque-sigle, .sidebar-bascule.
- Réduction en icônes seules : case à cocher masquée #nav-reduit (CSS pur, sans
  JavaScript, sans persistance) ; repli à 4.5rem, monogramme « VC », icônes
  centrées, bouton de recherche en loupe (masque SVG en data URI, sans requête
  externe). Uniquement ≥ 60rem.
- Petits écrans (≤ 60rem) : la barre latérale devient une barre supérieure
  (marque + navigation en ligne + recherche) ; la feuille prend des marges.
- Les 17 pages HTML : <header class="site-header"> remplacé par
  <input type=checkbox id="nav-reduit"> + <aside class="site-sidebar"> ; les 6
  entrées ont une icône SVG inline (aria-hidden) et un libellé ; aria-current
  « page » conservé sur la page courante ; marque en aria-label complet.
- assets/css/print.css : .site-sidebar / .nav-reduit / .sidebar-bascule exclus ;
  body en display:block ; .site-main et .site-footer neutralisés (ni fond, ni
  ombre, ni bord, ni rayon) pour une impression noire sur blanc.
- Aucun fichier JavaScript modifié (poids total inchangé ~20,75 Ko) ; le sommaire
  automatique, la barre d'impression et la recherche globale continuent de
  fonctionner sans modification.
- Vérification par rendu réel (Chrome headless) : accueil en mode bureau clair
  ET sombre, menu réduit (icônes seules), barre supérieure à 900 px et 420 px,
  page modèle 01 (onglet « Vues des feuilles » présent) — aucun écart. Encodage
  UTF-8 sans BOM et CRLF conservés. Recherche des noms interdits : aucune
  occurrence.

Étapes du jalon Retour F (faites) — refonte UI/UX · C : thème + icône copier
- assets/css/style.css : thèmes clair / sombre / automatique via data-theme sur
  <html>. « automatique » suit la préférence système (@media prefers-color-scheme
  avec :root:not([data-theme="clair"])) ; [data-theme="clair"] force le clair ;
  [data-theme="sombre"] force le sombre. Icône partagée .ico ; bouton
  .theme-toggle (bas du menu) ; .copy-email transformé en bouton icône carré.
- assets/js/nav.js : construireTheme() — bouton créé par JavaScript (cycle
  automatique → clair → sombre), pose/retire data-theme sur <html>, mémorise le
  choix dans localStorage (clé « theme » ; préférence d'affichage non traçante).
  construireCopieEmail() : icône copier + coche de confirmation (aria-label
  conservé, retour à l'icône après 2 s).
- Mini-script inline anti-flash dans le <head> des 17 pages (lit « theme » dans
  localStorage et pose data-theme avant le premier rendu) — exception
  documentée à « aucun script bloquant le rendu » ; tout le reste est en defer.
- Budget JavaScript porté de 21 à 24 Ko (.clinerules/04 et techContext.md) :
  poids réel 23 761 o (~23,20 Ko), nav.js 6 690 o (le reste inchangé).
- Vérification par rendu réel (Chrome headless) : thème automatique (système
  sombre) et thème « clair » forcé (pièce claire malgré système sombre), bouton
  de thème en bas du menu, icône copier sur la page Contact — aucun écart.
- Recherche des noms interdits : aucune occurrence.

Étapes du jalon « accueil + parcours » (faites)
- index.html : CTA « Découvrir le parcours » sous l'intro, chiffres clés conservés,
  trois sections « Compétences démontrées » (Excel, Business plans, Identité
  visuelle) avec résumé, mention de synthèse et lien « Voir → », CTA « Me contacter »
  en fin de page. Un seul <h2> visible → pas de sommaire automatique (seuil = 3).
- parcours.html : ligne de temps verticale à deux colonnes (gauche : formations,
  micro-entreprise 2021-2025, deux déménagements ; droite : carrière), chronologique
  du haut vers le bas. Compétences réparties dans chaque point : bulle « Compétences
  acquises » (.chrono-bulle, survol + :focus-within, caret) et fenêtre de détail au
  clic (.modale en CSS pur via :target). Déménagements sur fond bleu distinct
  (.chrono-demenagement) : 2020 Paris (mariage) et 2025 retour en Belgique (ville
  frontalière). Sections « Savoir-être », Langues, Centres d'intérêt, Travaux,
  Contact conservées ; « Compétences administratives/techniques », Formation et
  Expérience remplacées par la ligne de temps.
- assets/css/style.css : .competences/.competence (accueil) + .chrono* (colonne
  vertébrale centrale, points alignés, cartes, bulle, déménagement) + .modale* ;
  responsive ≤ 48rem (une seule colonne, points et ligne masqués).
- assets/css/print.css : .chrono en une colonne ; bulles rendues en texte visible
  (les compétences s'impriment) ; « Voir le détail » et fenêtres de détail masquées ;
  fonds et couleurs neutralisés ; .competence neutralisée.
- Fenêtres de détail placées en fin de <body> : le transform de l'animation de
  .site-main créait un bloc conteneur pour position:fixed (l'overlay ne couvrait pas
  la barre latérale). Déplacées hors de <main>, l'overlay couvre désormais toute la
  fenêtre.
- Aucun JavaScript ajouté : bulles et fenêtres de détail sont en CSS pur (poids
  total inchangé ~23,20 Ko). Vérification par rendu réel (Chrome headless) en clair
  et sombre, bureau et mobile (375 px), modale ouverte par :target, aperçu
  impression. Dates du pied de page portées au 10 octobre 2026.

Étapes du jalon « ligne de temps unifiée » (faites) — remplace la double colonne
- parcours.html : UNE seule colonne (plus de .chrono-col-gauche / -droite), lue du
  plus récent (haut) au plus ancien (bas). Trois chapitres <ol class="chrono-segment">
  (2025+ / 2020→2025 / 2001→2020), chacun avec sa propre colonne vertébrale, séparés
  par deux bandeaux de mobilité pleine largeur (.chrono-demenagement) qui coupent la
  ligne : 2025 retour en Belgique et 2020 déménagement vers Paris.
- Chaque <li class="chrono-point chrono-cat-…"> porte une étiquette de catégorie :
  Emploi (accent principal), Formation (vert sauge), Activité complémentaire
  (micro-entreprise 2021-2025 : carte en retrait, bordure pointillée, fond sauge).
  Légende à 4 puces (.chrono-legende) sous le titre ; intro réécrite (« du plus récent
  au plus ancien »).
- Ordre : 2026 Conforama · 2025-2026 Elior · 2025-2026 STUDI · [2025 Belgique] ·
  2025 Edith & Nous · 2022-2024 Montreuil · 2021-2025 micro-entreprise · 2021-2022
  AFPA 12 · 2020-2021 Val-de-Marne · [2020 Paris] · 2015-2016 Faculté de philosophie ·
  2014 CESS · 2007-2020 Cuisinier · 2001-2007 Saint Luc. Cuisinier reste 2007-2020
  (chevauchement assumé avec CESS 2014 et Faculté 2015-2016).
- Bulles « Compétences acquises » (.chrono-bulle, survol + :focus-within) et 12
  fenêtres de détail (:target) conservées à l'identique ; aucun JavaScript ajouté.
- assets/css/style.css : .chrono-segment, .chrono-cat-*, .chrono-meta, .chrono-cat,
  .chrono-legende/.chrono-puce, .chrono-demenagement-* ; responsive ≤ 48rem resserré.
  Règles obsolètes supprimées (.chrono-col*, .chrono-liste, .chrono-entete,
  .chrono-micro).
- assets/css/print.css : CV mono-colonne ; années + étiquettes en ligne, bulles en
  texte visible, caret de bulle et légende masqués, mobilités en bloc bordé à gauche.
- Vérification par rendu réel (Chrome headless) : timeline complète en bureau, mobile
  en colonne unique, aperçu impression (CV), fenêtre de détail ouverte par :target —
  aucun écart ; aucun débordement horizontal (scrollWidth = clientWidth) ; poids
  JavaScript inchangé (~23,20 Ko) ; noms interdits : aucune occurrence.

Points ouverts

- Jalon A : la capture « excel-03-commande » (feuille de commandes) est publiée
  à la demande du propriétaire — à vérifier visuellement qu'elle n'expose pas de
  données fournisseurs, la page modèle 03 indiquant par ailleurs ne pas publier
  la base d'articles et de commandes.
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

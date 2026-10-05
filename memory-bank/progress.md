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
- [ ] J6 — Contact et finitions : contact.html, mentions-legales.html,
      404.html, test mobile, contrôle final des noms interdits

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
  typographies en tableaux de synthèse. Nouveaux fichiers non publiés : « Charte
  graphique lilot calin.pdf » (marque réelle apparente, hors liste autorisée) et
  « Faisa 2 epinay… » (travail en cours, scanné). En ligne, vérifié (HTTP 200).
- 2026-10-05 · J6 (partiel) · Page 404.html créée (message « Page introuvable »
  et quatre cartes de retour vers les sections du portfolio) et marqueur .nojekyll
  ajouté (site statique, sans traitement Jekyll). Deux builds GitHub Pages annulés
  après des pushes rapprochés ; build final réussi. Page 404 vérifiée en ligne
  (statut 404 avec contenu personnalisé). Reste pour J6 : contact.html (formulaire
  tiers + consentement), mentions-legales.html (en attente de l'e-mail et du
  service de formulaire) et finitions.
- 2026-10-05 · J5 · Page parcours.html créée (CV) à partir de « Cv Volpe.pdf »
  (texte extrait via pypdf) et des compétences démontrées par le portfolio :
  compétences administratives et techniques, savoir-être, formation, expérience
  professionnelle, langues, centres d'intérêt, travaux présentés et contact.
  Retirés car interdits : numéros de téléphone et adresse postale. Nom
  « Calogero Volpe » limité à parcours.html (vérifié : nulle part ailleurs).
  E-mail de contact unique (celui du CV) publié sur la page. Mise en page
  imprimable gérée par la règle @media print existante. Poussé ; propagation
  du build GitHub Pages ralentie (file d'attente), vérification en ligne en cours.
- 2026-10-05 · Incident GitHub · Le déploiement (page parcours et mémoire) est
  bloqué par une panne GitHub Actions déclarée « critical » (incident ouvert à
  19:11 UTC : « job failures and delays affecting GitHub-hosted runner assignment
  and workflow start times »). Les jobs « pages build and deployment » restent en
  file, plusieurs builds ayant été annulés ou laissés en attente. Ce n'est pas un
  défaut du dépôt : le fichier est bien présent (raw 200) et se déploiera à la
  reprise du service.

## Rappel de fin de jalon
git add . → git commit → git push → git status propre → page vérifiée en ligne
→ memory-bank mis à jour et poussé → recherche des noms interdits.
# activeContext.md

Jalon en cours : J5 réalisé (page parcours créée et poussée ; build GitHub Pages
ralenti, vérification en ligne en cours). Prochain jalon : J6 (contact, mentions
légales, finitions).

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

Dernière action : J5 — parcours.html créée (CV) à partir de « Cv Volpe.pdf »
(texte extrait via pypdf) et des compétences démontrées par le portfolio.
Numéros de téléphone et adresse postale retirés ; nom « Calogero Volpe » limité
à cette page ; e-mail de contact unique publié sur la page.

Prochaine action : J6 — contact.html (formulaire via service tiers + case de
consentement obligatoire), mentions-legales.html (citant le service tiers et
rappelant « assistées par IA, relues et corrigées ») et finitions.

Points ouverts

- Adresse e-mail de contact non fournie : le pied de page pointe provisoirement
  vers contact.html (page créée en J6). Aucune adresse inventée.
- Pages contact.html et mentions-legales.html pas encore créées (J6) ; leurs
  liens pointent encore vers des cibles inexistantes. La page 404.html est en
  place (statut 404 + contenu personnalisé) ; un marqueur .nojekyll est présent.
- Déploiement bloqué par une panne GitHub Actions (incident « critical » ouvert
  le 05/10 à 19:11 UTC : assignation des runners et démarrage des workflows
  retardés). Ce n'est pas un défaut du dépôt : parcours.html est bien présent
  dans le dépôt (raw 200) et se déploiera à la reprise du service.
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

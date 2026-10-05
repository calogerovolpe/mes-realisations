# activeContext.md

Jalon en cours : J6 réalisé (contact.html et mentions-legales.html créés,
finitions effectuées, mémoire corrigée). Prochain jalon : aucun — le portfolio
est complet et à valider par le propriétaire.

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

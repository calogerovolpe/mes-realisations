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
- [ ] J3b — Business plan suite : études 02 et 03
- [ ] J4 — Parcours + identité visuelle : parcours.html, version imprimable,
      design-charte.html
- [ ] J5 — Contact et finitions : contact.html, mentions-legales.html,
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

## Rappel de fin de jalon
git add . → git commit → git push → git status propre → page vérifiée en ligne
→ memory-bank mis à jour et poussé → recherche des noms interdits.
# activeContext.md

Jalon en cours : J3b terminé (études 02, 03 et 04 publiées). Prochain jalon : J4.

Dernière action : J3b terminé. Trois études créées selon le gabarit exact de
l'étude 01 (fil d'Ariane, Contexte, Méthode, Résultat, Ce que cela démontre) :
bp-etude-02-cafe-restaurant.html (marque « L'Appartement », source « Business
plan.docx »), bp-etude-03-restauration-artisanale.html (marque « Al Dante »,
source « Business plan.pdf ») et bp-etude-04-restauration-emporter.html (marque
« Eathic « To-Go » », source « Business plan Eathic.pdf »). business-plan.html
porte désormais quatre cartes. Deux tableaux de synthèse par étude. En ligne,
vérifié (HTTP 200).

Historique J3a : deux pages créées : business-plan.html (sommaire
portant la phrase d'introduction imposée, trois cartes dont seule l'étude 01 est
active) et bp-etude-01-restauration-saine.html (marque « Mensana » ; sections
Contexte, Méthode, Résultat, Ce que cela démontre). Source : « Business plan
court.docx » (version Word non chiffrée du document source, lisible). Quatre
captures produites par capture d'écran de la fenêtre Word (API Win32 PrintWindow,
l'export PDF de Word étant inopérant dans cet environnement) : sommaire, étude de
marché, analyse des recherches Google, zone d'implantation. Exclus des textes et
des images : la couverture (nom du propriétaire), la section « Mes conseillés
directs » (noms de personnes réelles) et la phrase contenant l'adresse exacte du
local. Trois tableaux de synthèse (marché, zone de chalandise,
concurrence/employeurs) reprennent uniquement les valeurs explicites du document
(Agence BIO, IFOP, ADEME/GreenFlex, Google Keyword Planner, SemRush). Le document
ne contient aucun état financier : aucune projection n'a été inventée, le renvoi
vers le modèle d'exploitation Excel est explicite. En ligne, vérifié (HTTP 200).

Décision de confidentialité : le dossier .clinerules/ (qui contient des noms
réels à interdire) et le dossier /docs/ sont exclus de la publication via
.gitignore. Le dépôt public ne contient que .gitignore, README.md, index.html,
les pages HTML, assets/ et memory-bank/.

Décision technique J3b : les documents sources sont lus sans Word — DOCX via
l'extraction du XML interne (System.IO.Compression) et PDF via la bibliothèque
Python pypdf. Les captures sont produites en rendant les pages PDF en images
(PyMuPDF), puis recadrées (Pillow) pour retirer le bandeau « nom + adresse »
d'Al Dante et le pied de page « nom » d'Eathic ; images sous 300 Ko. (Rappel J3a :
captures par la fenêtre Word via l'API Win32 PrintWindow, l'export PDF de Word
étant bloqué et le collage presse-papiers — CopyAsPicture — corrompant le tas.)

Prochaine action : J4 — parcours.html (présentation et version imprimable en CV),
design-charte.html (charte graphique) et contrôle de cohérence entre la section
Business plans et la section Excel.

Points ouverts

- Adresse e-mail de contact non fournie : le pied de page pointe provisoirement
  vers contact.html (page créée en J5). Aucune adresse inventée.
- Pages design-charte.html, parcours.html, contact.html, mentions-legales.html,
  404.html pas encore créées (J4 et J5). Les liens vers ces pages pointent pour
  l'instant vers des cibles inexistantes.
- ANCHORARRAY est écrit tel quel (nom de l'opérateur de plage déversée) ;
  aucune traduction française imposée.
- Captures générées automatiquement : à vérifier visuellement par le propriétaire
  (cadrage serré, aucune donnée interdite lisible).
- Le document Eathic intitule « optimiste » la page de calcul du ROI du scénario
  moyen (montants du scénario moyen) : la page publiée retient la correspondance
  montants → scénario (25,24 % pessimiste / 26,48 % moyen / 47,95 % optimiste).

Blocages

- Aucun.

Rappel
Aucun projet décrit dans /docs n'existe. Les noms commerciaux sont inventés.
Aucune question à poser au propriétaire à ce sujet.

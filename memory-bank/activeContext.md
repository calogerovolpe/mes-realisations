# activeContext.md

Jalon en cours : J3b — Business plan suite (J3a terminé).

Dernière action : J3a terminé. Deux pages créées : business-plan.html (sommaire
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

Décision technique : l'export PDF de Word (ExportAsFixedFormat et SaveAs2) est
inopérant dans cet environnement (blocage) et le collage presse-papiers
(CopyAsPicture) provoque une corruption du tas. Les captures sont donc produites
par capture d'écran de la fenêtre Word via l'API Win32 PrintWindow, puis
recadrées pour retirer barre de titre, ruban et volets.

Prochaine action : J3b — études 02 (bp-etude-02-cafe-restaurant.html, marque
« L'Appartement ») et 03 (bp-etude-03-restauration-artisanale.html, marque
« Al Dante »), à partir de « Business plan.docx » et « Business plan.pdf ».

Points ouverts

- Adresse e-mail de contact non fournie : le pied de page pointe provisoirement
  vers contact.html (page créée en J5). Aucune adresse inventée.
- Pages business-plan.html, design-charte.html, parcours.html, contact.html,
  mentions-legales.html, 404.html pas encore créées (J3 à J5). Les liens vers ces
  pages pointent pour l'instant vers des cibles inexistantes.
- ANCHORARRAY est écrit tel quel (nom de l'opérateur de plage déversée) ;
  aucune traduction française imposée.
- Captures générées automatiquement : à vérifier visuellement par le propriétaire
  (cadrage serré, aucune donnée interdite lisible).

Blocages

- Aucun.

Rappel
Aucun projet décrit dans /docs n'existe. Les noms commerciaux sont inventés.
Aucune question à poser au propriétaire à ce sujet.

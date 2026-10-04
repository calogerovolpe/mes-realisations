# systemPatterns.md

Structure
Pages HTML à plat à la racine. Un seul CSS partagé (assets/css/style.css).
Aucun gabarit serveur, aucun include : la navigation et le pied de page
sont recopiés à l'identique dans chaque page (et doivent le rester).

Navigation
Accueil · Excel · Business plans · Identité visuelle · Parcours · Contact.

Composants réutilisables
- Carte de réalisation : titre, contexte, méthode, résultat, ce que cela démontre.
- Bloc « onglets » en CSS pur (input radio + labels) pour les pages de modèles.
- Bloc compétences (liste de 4 à 6 lignes courtes).
- Bandeau de contact en fin de page.
- Pied de page identique partout (texte exact dans .clinerules/04).

Organisation des contenus
- Une réalisation = une page dédiée, toujours au même format.
- Deux pages sommaire (excel.html, business-plan.html) qui listent les cartes.
- Les pages sommaire portent la phrase d'introduction imposée.
- Les captures d'écran vivent dans assets/img/ et sont référencées en relatif.

Cohérence
Toute page nouvelle doit être ajoutée à la navigation de toutes les pages
existantes dans le même commit.
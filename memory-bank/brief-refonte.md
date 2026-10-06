# BRIEF — REFONTE DU PORTFOLIO « MES RÉALISATIONS » devient « MES RÉALISATIONS ADMIN »

> **À lire intégralement avant toute modification du projet.**  
> Site : [https://calogerovolpe.github.io/mes-realisations/](https://calogerovolpe.github.io/mes-realisations/)  
> Dépôt : calogerovolpe/mes-realisations (GitHub Pages, site statique)  
> Dernière mise à jour du brief : à dater par moi

* * *

## 0. À COMPLÉTER PAR MOI AVANT DE COMMENCER

**Si une information manque ou reste vide, POSE-MOI LA QUESTION. N'invente rien. N'écris aucun chiffre, diplôme, date ou compétence qui ne figure pas ci-dessous.**

### Identité du site

*   Nom affiché en titre : **Volpe Calogero**
    
*   Titre du site : **Volpe Calogero — Mes réalisations administratifs**
    
*   Positionnement affiché : Assistant administratif — gestion et suivi de dossiers, suivi budgétaire et reporting, modélisation Excel et rédaction
    
*   E-mail de contact : [bx.volpe@gmail.com](mailto:bx.volpe@gmail.com)
    

### Formation à afficher (cocher ce qui doit apparaître)

- [ ] **CESS** — Certificat d'enseignement secondaire supérieur — établissement : Cardinal Mercier — année : 2014
- [x] **Formation technique avancée en écriture** — Edith & Nous — 2025  
    Techniques de narration et exigences éditoriales appliquées à la structuration de récits professionnels et à l'animation d'ateliers d'écriture.
- [ ] **Bac Pro dessin de projet** — établissement : AFPA 12 — année : 2021 - 2022
- [ ] **Bac+2 communication web** — établissement : STUDI e-Learling — année : 2025 - 2026
- [ ] **Faculté de philosophie, option sociologie** — Université de Saint-Louis, Bruxelles — 2015-2016
- [ ] Saint Luc - Ecole d’art - Bruxelles - 2001 - 2007

### Autres informations à confirmer

*   Mentionner **AutoCAD, Revit, SketchUp** dans l'expérience Ville de Montreuil ? oui
    
*   Mentionner que je donnais cours de Autocad pendant 1 ans via SuperProf à des ingégnieurs et architectes.
    
*   **Mettre expérience profesionnel en ordre chronologique, du plus récent vers le plus ancien.**
    

* * *

## 1. OBJECTIF DU PROJET

Transformer un site statique en un portfolio **interactif, lisible et imprimable**, destiné à des candidatures dans le domaine **administratif**.
Règle de décision pour toute fonctionnalité :

> **« Est-ce que ça aide un recruteur, ou est-ce que ça m'amuse ? »**  
> Si la réponse est la deuxième, la fonctionnalité n'est pas codée.

Le site **reste un portfolio administratif**. Ne pas le réorienter vers le dessin technique ni vers le développement web.

* * *

## 2. CORRECTIONS DE CONTENU — PRIORITÉ 1 (à faire en premier, sans JavaScript)

### 2.1 Titre

Remplacer partout « Mes réalisations » par **« Volpe Calogero — Mes réalisations adminitratifs »** : balise `title`, en-tête de page, fil d'Ariane, métadonnées.

### 2.2 Page `parcours.html` — Section « Formation »

Reprendre **uniquement** les entrées cochées dans la section 0 ci-dessus, la plus récente d'abord. Le CESS se place en fin de bloc.

### 2.3 Page `parcours.html` — Section « Expérience professionnelle »

**a) Réinsérer l'activité freelance** (elle a disparu, elle crée un trou de 4 ans dans la chronologie). À placer entre Elior et Conforama.

> **Consultant en marketing digital & communication** — Freelance — 2021-2025 (activité complémentaire)  
> Prospection et négociation ; analyse du besoin client ; stratégies marketing B2B et B2C ; conseil en image de marque et création de supports digitaux (web et visuels) ; gestion d'entreprise et d'un portefeuille clients ; facturation (Abby, Pack Office). Audit et stratégie de developpement pour le secteur de la restauration → voir mes business plan et mes modèle excel qui démontre mon savoir faire.

**b) Corriger la ligne Ville de Montreuil.** La formulation actuelle (« Dessin et lecture de plans techniques (plus de 400 bâtiments) ») laisse croire que j'ai dessiné 400 bâtiments. Ce n'est pas exact. Remplacer par :

> **Dessinateur projeteur bâtiment** — Ville de Montreuil — 2022-2024  
> Archivage des bâtiment de la ville selon leur nature (sport, culturel, éducation, soin, etc.). Référent « plans bâtiment » pour un parc de plus de 400 bâtiments. Mise à jour de plus de 20 plans techniques, dont certains avec relevé d'existant sur site ; réalisation de 3 études de faisabilité ; archivage ; gestion de dossiers confidentiels.

_(Ajouter « Outils : AutoCAD, Revit, SketchUp. » uniquement si la case correspondante est cochée en section 0.)_

### 2.4 Chiffres à mettre en avant

Ces chiffres doivent être **identiques partout** dans le site :

*   10 collaborateurs
    
*   600 couverts/jour
    
*   40 clients
    
*   20+ plans mis à jour
    
*   3 études de faisabilité
    
*   9 tableaux croisés dynamiques
    

* * *

## 3. FONCTIONNALITÉS JAVASCRIPT — PRIORITÉ 2

### 3.1 Impression / export PDF — LE PLUS UTILE

*   Boutons « Imprimer cette page » et « Télécharger en PDF », appelant tous deux `window.print()`.
    
*   Feuille de style `@media print` : masquer navigation, pied de page légal et boutons ; forcer noir sur blanc ; empêcher les coupures au milieu d'un bloc (`break-inside: avoid`) ; afficher les URL des liens.
    
*   **Pourquoi :** un recruteur qui ne consulte pas le site peut quand même conserver le dossier.
    

### 3.2 Recherche instantanée dans l'index des fonctions Excel (`excel.html`)

*   Champ de recherche au-dessus de l'index, filtrage en temps réel.
    
*   Boutons-filtres par catégorie : Recherche · Tableaux dynamiques · Agrégation · Logique · Divers.
    
*   Compteur de résultats (« 12 fonctions affichées ») et message « Aucun résultat » si vide.
    
*   **Pourquoi :** démontre une compétence en soi et fait gagner du temps au lecteur.
    

### 3.3 Navigation collante avec section active

*   Barre de navigation fixée en haut au défilement.
    
*   Surlignage automatique du lien de la section visible (via `IntersectionObserver`).
    

### 3.4 Blocs dépliables pour les réalisations

*   Utiliser les balises natives `<details>` et `<summary>` (pas de JS) pour « Contexte · Méthode · Résultat · Compétences démontrées ».
    
*   Ajouter des boutons « Tout déplier / Tout replier » en JS.
    
*   Le contenu doit rester intégralement présent dans le HTML.
    

### 3.5 Sommaire automatique

*   Générer en JS un sommaire cliquable à partir des `<h2>` de la page, avec défilement doux.
    

### 3.6 Compteurs animés et apparition au défilement

*   Animation des chiffres clés (0 → 600) via `IntersectionObserver`.
    
*   Apparition en fondu des blocs à l'entrée dans l'écran.
    
*   **Obligatoire :** tout désactiver si `prefers-reduced-motion: reduce`.
    

### 3.7 Bouton « Copier l'e-mail »

*   Bouton à côté de l'adresse → `navigator.clipboard.writeText()`, retour visuel « Copié ! » pendant 2 secondes, repli sur l'affichage classique si l'API est indisponible.
    

### 3.8 Bouton « Retour en haut »

*   Apparaît après 400 px de défilement, défilement doux.
    

### 3.9 Recherche globale (bonus — uniquement si tout le reste fonctionne)

*   Raccourci clavier `Ctrl+K` (et `/`) ouvrant une fenêtre de recherche couvrant : titres de sections, noms des modèles Excel, noms des fonctions Excel, intitulés de poste.
    
*   Navigation clavier (`↑ ↓ Entrée Échap`), focus piégé, fermeture au clic extérieur.
    

* * *

## 4. DESIGN ET FINITIONS — PRIORITÉ 3

*   Cohérence visuelle sur toutes les pages : mêmes espacements, mêmes tailles de titres, mêmes couleurs d'accent.
    
*   Ajouter une photo de moi en page d’accueil (photo qui se trouve dans docs au nom de “photo Volpe Calogero“).
    
*   Carte de visite en haut de chaque page : nom, titre, e-mail, bouton « Imprimer ».
    
*   Cartes cliquables pour les réalisations (survol discret, focus clavier visible).
    
*   Transition en fondu simple à l'affichage des pages. Pas de routeur JS.
    
*   Mode sombre uniquement via `prefers-color-scheme` (pas de bouton, pas de mémorisation).
    
*   Aucune bibliothèque d'animation. Uniquement des transitions CSS.
    
*   Approche mobile d'abord. Tester à 375 px de large.
    
*   Ajouter la date de dernière mise à jour dans le pied de page.
    

* * *

## 5. ACCESSIBILITÉ ET PERFORMANCE

*   Structure sémantique : `header`, `nav`, `main`, `section`, `footer`. Un seul `h1` par page, pas de saut de niveau de titre.
    
*   Tous les éléments interactifs utilisables **au clavier**, avec anneau de focus visible.
    
*   `aria-expanded` sur les accordéons, `aria-live="polite"` sur le compteur de résultats, `aria-label` sur les boutons-icônes.
    
*   Contraste texte/fond conforme AA minimum.
    
*   Métadonnées par page : `title` unique, `meta description`, balises Open Graph (`og:title`, `og:description`, `og:url`).
    
*   Aucun script ne doit bloquer le rendu. Un seul script chargé avec `defer`.
    
*   Poids total du JavaScript : rester sous 15 Ko non minifié.
    

* * *

## 6. CONTRAINTES TECHNIQUES — NON NÉGOCIABLES

*   **Uniquement HTML, CSS et JavaScript vanilla.** Aucun framework (pas de React, Vue, Tailwind, Bootstrap).
    
*   **Aucune dépendance externe, aucun CDN, aucun** `npm`**, aucune étape de build.**
    
*   Le site doit fonctionner en ouvrant directement `index.html`, et tel quel sur GitHub Pages.
    
*   **Aucune police externe.** Utiliser une pile de polices système.
    
*   **Amélioration progressive obligatoire :** tout le contenu reste lisible et navigable **JavaScript désactivé**. Le JS ajoute du confort, il ne porte pas le contenu.
    
*   Ne rien supprimer du contenu existant sans me le signaler.
    
*   **Ne pas renommer les fichiers HTML existants** (`index.html`, `excel.html`, `parcours.html`, etc.) : des liens externes peuvent pointer dessus.
    
*   **Conserver intégralement le bandeau légal** en bas de chaque page (noms commerciaux inventés, données sourcées, VBA assisté par IA relu et corrigé, dossier présentable en entretien sur demande).
    
*   Commentaires du code en français.
    

* * *

## 7. ARBORESCENCE

Ne pas casser l'existant. Ajouter :

*   `assets/css/style.css` — styles globaux
    
*   `assets/css/print.css` — feuille d'impression
    
*   `assets/js/main.js` — point d'entrée, chargé en `defer`
    
*   `assets/js/nav.js` — navigation collante, section active, retour en haut
    
*   `assets/js/print.js` — boutons d'impression, copie de l'e-mail
    
*   `assets/js/search.js` — recherche dans l'index des fonctions
    
*   `assets/js/reveal.js` — apparition au défilement et compteurs animés
    

Si le CSS actuel est écrit en ligne dans les pages, le déplacer dans `style.css` **sans modifier les règles**, puis l'enrichir.

* * *

## 8. DÉCOUPAGE EN PHASES

Exécuter dans l'ordre. **Un commit par phase. S'arrêter et me montrer le résultat avant de passer à la phase suivante.**

*   **Phase 0 — Sécurité.** Créer une branche `refonte` et travailler dessus, jamais sur `main`.
    
*   **Phase 1 — Contenu.** Toutes les corrections de la section 2. Aucun JavaScript. Rien d'autre.
    
*   **Phase 2 — Impression.** Boutons d'impression et feuille de style `@media print`.
    
*   **Phase 3 — Navigation.** Navigation collante, section active, retour en haut, copie de l'e-mail.
    
*   **Phase 4 — Recherche des fonctions.** Filtres et recherche instantanée sur `excel.html`.
    
*   **Phase 5 — Accordéons.** `<details>` / `<summary>` et boutons « tout déplier / tout replier ».
    
*   **Phase 6 — Dynamisme.** Compteurs animés, apparition au défilement, sommaire automatique.
    
*   **Phase 7 — Finitions.** Métadonnées, Open Graph, accessibilité, mode sombre, date de mise à jour.
    
*   **Phase 8 — Bonus.** Recherche globale `Ctrl+K`.
    

* * *

## 9. INTERDICTIONS

*   Ne pas ajouter de framework, de CDN, de dépendance ni d'étape de build.
    
*   Ne pas refaire le design de zéro : **améliorer, pas remplacer.**
    
*   Ne pas placer de contenu essentiel uniquement en JavaScript.
    
*   Ne pas ajouter d'animation sans fonction (carrousels automatiques, particules, effets de souris, musique).
    
*   Ne pas supprimer le bandeau légal ni la mention « dossier complet présentable en entretien sur demande ».
    
*   **Ne jamais inventer** de chiffre, de diplôme, de date ou de compétence. En cas de doute : poser la question.
    
*   Ne pas toucher aux noms des fichiers HTML existants.
    
*   Ne pas publier sur GitHub Pages sans me le dire.
    

* * *

## 10. CRITÈRES DE RÉUSSITE

Le travail est terminé quand :

- [ ] Le site s'ouvre et fonctionne **JavaScript désactivé**.
- [ ] `Ctrl+P` sur n'importe quelle page produit un document propre, sans navigation et sans coupure au milieu d'un bloc.
- [ ] Le titre du site est « Volpe Calogero — Mes réalisations ».
- [ ] Le CESS, Edith & Nous, l'activité freelance et les chiffres corrigés de Montreuil sont en ligne.
- [ ] Taper « RECHERCHEX » dans la recherche des fonctions n'affiche que le résultat correspondant.
- [ ] Le site est entièrement utilisable au clavier, focus visible partout.
- [ ] Aucune erreur dans la console du navigateur.
- [ ] Le site s'affiche correctement à 375 px de large.
- [ ] `prefers-reduced-motion` désactive bien toutes les animations.
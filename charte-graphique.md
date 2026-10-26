# Charte graphique — « Volpe Calogero — Mes réalisations administratives »

> Document de référence du système de design du site. Source de vérité : les jetons CSS de `assets/css/base.css` et les modules listés en fin de document. Toute évolution doit rester cohérente avec cette charte.

## Sommaire

1. [Objet et périmètre](#1-objet-et-périmètre)
2. [Principes fondateurs](#2-principes-fondateurs)
3. [Palette](#3-palette)
4. [Typographie](#4-typographie)
5. [Angles et rayons](#5-angles-et-rayons)
6. [Grille, espacements et points de rupture](#6-grille-espacements-et-points-de-rupture)
7. [Navigation](#7-navigation)
8. [Composants](#8-composants)
9. [Iconographie](#9-iconographie)
10. [Mouvement et animations](#10-mouvement-et-animations)
11. [Accessibilité](#11-accessibilité)
12. [Impression](#12-impression)
13. [Fichiers de référence](#13-fichiers-de-référence)

## 1. Objet et périmètre

Cette charte décrit l'identité visuelle du portfolio « Volpe Calogero — Mes réalisations administratives ». Elle couvre les couleurs, la typographie, les espacements, les composants, la navigation, le mouvement, l'accessibilité et l'impression. Elle s'applique à toutes les pages HTML, à la feuille d'impression et aux interfaces créées par JavaScript.

## 2. Principes fondateurs

- **Blanc / noir, sobre et affirmé** : fond blanc (`#FFFFFF`), texte noir (`#000000`). Aucun mode sombre : thème clair unique.
- **Verts en accents** : l'échelle `#E4FFC7` → `#C4D6B0` → `#85A365` sert aux fonds, filets, boutons, pastilles et états actifs. Le texte reste noir (noir sur vert = contraste AA).
- **Angles droits** : aucun rayon d'arrondi, sauf les pastilles et tags en pilule (`999px`).
- **Filets fins, beaucoup d'espace blanc, grille lisible.**
- **Ombres douces et micro-animations**, jamais spectaculaires.
- **Polices système uniquement** : aucune police téléchargée.
- **Aucune dépendance externe** : pas de CDN, pas de police distante, pas d'analytics.

## 3. Palette

### 3.1 Fonds et encres

| Jeton | Valeur | Usage |
|---|---|---|
| `--papier` | `#FFFFFF` | Fond principal (feuille de contenu) |
| `--papier-2` | `#F6F8F2` | Fond secondaire très clair |
| `--bureau` | `#FFFFFF` | Plan de travail derrière la feuille |
| `--encre` | `#000000` | Texte principal |
| `--encre-douce` | `#333333` | Texte secondaire |
| `--filet` | `#C4D6B0` | Filets et bordures fines |
| `--fond-champ` | `#FFFFFF` | Fond des champs de formulaire |

### 3.2 Accents (verts)

| Jeton | Valeur | Usage |
|---|---|---|
| `--accent` | `#85A365` | Accent principal (filets, bordures, icônes) |
| `--accent-fonce` | `#5C7A47` | Texte d'accent (contraste AA sur blanc) |
| `--accent-fond` | `#E4FFC7` | Fond d'accent clair |
| `--accent-2` | `#C4D6B0` | Accent secondaire |
| `--accent-2-fond` | `#E4FFC7` | Fond d'accent secondaire |
| `--accent-3` | `#85A365` | Accent tertiaire |
| `--accent-3-fond` | `#E4FFC7` | Fond d'accent tertiaire |

### 3.3 Surfaces vertes

| Jeton | Valeur | Usage |
|---|---|---|
| `--surface-vert-clair` | `#E4FFC7` | Cartes, encadrés, sommaires |
| `--surface-vert-moyen` | `#C4D6B0` | Chiffres clés, pied de page |
| `--surface-vert-fort` | `#85A365` | États actifs, filets pleins |

### 3.4 Dégradés

| Jeton | Valeur | Usage |
|---|---|---|
| `--degrade-accent` | `linear-gradient(135deg, #85A365, #6F8C52)` | Boutons, états actifs |
| `--degrade-entete` | `linear-gradient(180deg, #FFFFFF, #F6F8F2)` | En-têtes |

### 3.5 Ombres

| Jeton | Valeur | Usage |
|---|---|---|
| `--ombre-1` | `0 1px 2px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.08)` | Repos (cartes, boutons) |
| `--ombre-2` | `0 8px 22px rgba(0,0,0,.14)` | Survol, panneaux |

### 3.6 Barre latérale

| Jeton | Valeur | Usage |
|---|---|---|
| `--sidebar-fond` | `#E4FFC7` | Fond de la barre latérale |
| `--sidebar-encre` | `#000000` | Texte de la barre |
| `--sidebar-encre-douce` | `#333333` | Texte secondaire |
| `--sidebar-filet` | `#C4D6B0` | Filets de la barre |
| `--sidebar-survol` | `rgba(133,163,101,.14)` | Survol des entrées |
| `--largeur-sidebar` | `17rem` | Largeur de la barre (bureau) |

## 4. Typographie

### 4.1 Familles

| Rôle | Police | Jeton |
|---|---|---|
| Titres | Georgia, « Times New Roman », serif | `--police-titre` |
| Corps | system-ui, -apple-system, « Segoe UI », Roboto, Helvetica, Arial, sans-serif | — |
| Chasse fixe / code | ui-monospace, « Cascadia Mono », « Segoe UI Mono », Consolas, « Courier New », monospace | `--police-mono` |

### 4.2 Échelle

| Élément | Taille | Interligne | Marge haute |
|---|---|---|---|
| `body` | `1rem` (16px) | `1.65` | — |
| `h1` | `clamp(1.8rem, 5vw, 2.6rem)` | `1.25` | `0` |
| `h2` | `1.5rem` | `1.25` | `2.5rem` (`1.75rem` ≤ 60rem) |
| `h3` | `1.2rem` | `1.25` | `1.75rem` (`1.25rem` ≤ 60rem) |

### 4.3 Règles

- Titres en Georgia, graisse normale (`font-weight: normal`).
- Corps en sans-serif système, `line-height: 1.65`.
- Taille de base ≥ 16px.
- Sur `≤ 30rem`, `h2` passe à `1.3rem` et `h3` à `1.1rem`.

## 5. Angles et rayons

| Jeton | Valeur | Règle |
|---|---|---|
| `--rayon` | `0` | Angles droits (cartes, panneaux, feuille) |
| `--rayon-petit` | `0` | Angles droits (boutons, champs) |

**Exception** — pilules `999px` : pastilles du sommaire, années et catégories de la ligne de temps, étiquettes de fonctions, filtres, raccourci clavier, bouton « retour en haut ». Les points et puces conservent leur cercle.

## 6. Grille, espacements et points de rupture

### 6.1 Largeurs

- `--largeur` : `60rem` (contenu du pied de page).
- Feuille de contenu : `width: min(100% - 3rem, 62rem)` sur bureau ; `width: auto` sur mobile.
- Barre latérale : `17rem` sur bureau ; barre inférieure pleine largeur sur mobile.

### 6.2 Espacements

- Feuille : `padding: 2.5rem clamp(1.25rem, 4vw, 3rem) 3rem` (bureau) ; `padding-top: 1.5rem` et `padding-bottom: 2rem` sur mobile.
- Rythme vertical des titres : voir section 4.2.
- Grilles : `gap: 1.25rem` (cartes, compétences) ; `0.75rem` (chiffres clés).

### 6.3 Points de rupture

| Seuil | Effet |
|---|---|
| `≤ 60rem` (960px) | Barre inférieure mobile, marges resserrées, `h2`/`h3` réduits |
| `≤ 48rem` (768px) | Ligne de temps resserrée |
| `≤ 40rem` (640px) | Boutons de la visionneuse réduits |
| `≤ 34rem` (544px) | Navigation de fin de page empilée |
| `≤ 30rem` (480px) | Titres réduits, chiffres clés en 2 colonnes |
| `≤ 22rem` (352px) | Chiffres clés en 1 colonne |
| `≥ 44rem` (704px) | Photo de profil flottante à droite |

## 7. Navigation

### 7.1 Barre latérale (bureau)

- Fond vert clair (`--sidebar-fond`), largeur `17rem`, collante (`position: sticky`).
- Marque en tête, six entrées avec icône SVG et libellé, bouton « Rechercher ».
- Entrée courante : `aria-current="page"`, fond `--degrade-accent`, texte noir.

### 7.2 Réduction en icônes

- Case à cocher CSS pure (`#nav-reduit`), largeur `4.5rem`.
- Libellés masqués, icônes centrées, sigle « VC » affiché.

### 7.3 Barre inférieure mobile (`≤ 60rem`)

- Barre fixe en bas, icônes et **libellés courts** (`0.6rem`).
- Entrées de largeur égale (cibles ≥ 44px), réparties sur toute la largeur.
- **« Accueil » centré** (4e sur 7), puis Excel, Business plans, Identité visuelle, Parcours, Contact et une **loupe de recherche**.
- Prise en compte de `env(safe-area-inset-bottom)`.

### 7.4 Pied de page

- Bande vert moyen (`--surface-vert-moyen`), filet supérieur vert foncé.
- Colonnes de liens (Sections, Modèles Excel, Études, Chartes, Informations).
- Texte légal fixe, lien mentions légales et e-mail.

## 8. Composants

### 8.1 Cartes (`.card`)

- Fond vert clair, filet, barre supérieure en dégradé, ombre douce, survol avec légère élévation.
- Contenu : `.card-title` (Georgia), `.card-text`, `.card-action`, `.card-meta`.

### 8.2 Boutons (`.btn`)

- Fond en dégradé vert, texte noir, angle droit, ombre douce.
- Variantes : `.btn-secondaire` (fond blanc, texte vert foncé), `.btn-vert` (vert moyen).

### 8.3 Chiffres clés (`.stat`)

- Grille `repeat(auto-fit, minmax(11rem, 1fr))` ; 2 colonnes `≤ 30rem`, 1 colonne `≤ 22rem`.
- Fond vert moyen, filet supérieur vert, valeur en Georgia `2rem`.

### 8.4 Accroche (`.accroche`)

- Texte `1.2rem`, filet gauche vert `4px`, fond vert clair.

### 8.5 Tableaux (`.table`)

- `.table-wrap` défilable horizontalement, filet, ombre.
- En-têtes sur fond vert clair, bordure basse verte, dernière ligne en gras.

### 8.6 Onglets (`.tabs`)

- CSS pur : radios masqués et labels ; panneau actif affiché ; label actif en dégradé vert.

### 8.7 Sommaire (`.sommaire`)

- Panneau vert clair, titre Georgia, liens en pilules `999px`, lien courant en dégradé vert.

### 8.8 Dossier lié (`.dossier`)

- Panneau vert clair, filet gauche vert `4px`, libellé en majuscules, liens en gras.

### 8.9 Formulaire (`.form`)

- Champs `1rem`, filet vert, fond blanc, focus visible (`outline` vert).
- Bouton d'envoi en dégradé vert.

### 8.10 Ligne de temps (`.chrono`)

- Colonne verticale, points ronds, cartes à filet gauche coloré selon la catégorie (emploi, formation, complément, mobilité).
- Années et catégories en pilules.

### 8.11 Recherche globale (`.rg-*`)

- Overlay sombre, panneau blanc, champ `1rem`, résultats en lignes, statut `aria-live`.
- Ouverture par bouton ou `Ctrl+K` / `Cmd+K`.

### 8.12 Visionneuse d'images (`.visionneuse`)

- Fond sombre, boîte blanche, zoom, précédent/suivant, fermeture, clavier et molette.

## 9. Iconographie

- Icônes **SVG inline**, traits (`fill: none`, `stroke: currentColor`, `stroke-width: 1.7`, extrémités arrondies).
- Tailles : `1.15rem` (navigation bureau), `1.35rem` (barre mobile), `1.05rem` (boutons).
- Toujours `aria-hidden="true"` et `focusable="false"` quand l'icône est décorative.

## 10. Mouvement et animations

- Transitions douces (`0.15s` à `0.18s ease`) sur couleurs, bordures, ombres et transformations.
- Apparition du contenu : animation `apparition` (0.45s, opacité et translation).
- **Tout est désactivé** si `prefers-reduced-motion: reduce`.
- Défilement doux uniquement si `prefers-reduced-motion: no-preference`.

## 11. Accessibilité

- Contraste AA visé sur fond blanc ; texte noir.
- Focus visible : `outline: 2px solid var(--accent)` (décalage 2px).
- Texte de base ≥ 16px ; lisible et utilisable à 375px.
- Navigation clavier complète ; lien d'évitement « Aller au contenu ».
- `alt` sur toutes les images ; `aria-current` sur la page courante.
- Aucun cookie, aucun traceur, aucun script tiers.

## 12. Impression

- Feuille `print.css` chargée en `media="print"`.
- Navigation, pied de page, boutons, sommaires et interfaces masqués.
- Noir sur blanc, aucun fond, aucune ombre, aucun dégradé.
- Pas de coupure au milieu d'un bloc (`break-inside: avoid`).
- URL des liens affichée (sauf ancres et e-mail).
- La page Parcours s'imprime en CV (ligne de temps linéarisée).

## 13. Fichiers de référence

| Fichier | Rôle |
|---|---|
| `assets/css/style.css` | Point d'entrée (`@import`) |
| `assets/css/base.css` | Jetons, remise à zéro, typographie, focus, mouvement |
| `assets/css/layout.css` | Feuille de contenu, pied de page, fil d'Ariane |
| `assets/css/navigation.css` | Barre latérale, réduction, barre mobile |
| `assets/css/components.css` | Cartes, boutons, chiffres, tableaux, onglets, sommaires, formulaires |
| `assets/css/parcours.css` | Compétences, ligne de temps, modales |
| `assets/css/recherche.css` | Recherche globale et filtres |
| `assets/css/visionneuse.css` | Visionneuse d'images |
| `assets/css/print.css` | Impression |

---

*Document de référence interne — à maintenir en cohérence avec les jetons CSS. Dernière mise à jour : 26 octobre 2026.*

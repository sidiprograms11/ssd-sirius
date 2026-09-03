# Captures Flash Market

Déposer ici les captures d'écran réelles de l'application, avec **exactement** ces noms :

| Fichier | Écran attendu |
| --- | --- |
| `01-recherche.png` | Recherche géolocalisée + grille « Parcourir par catégorie » |
| `02-paiement-orange-money.png` | Boost d'annonce → écran de paiement Orange Money |
| `03-choix-operateur.png` | Paiement Mobile Money → choix du pays / de l'opérateur |
| `04-profil-vendeur.png` | Profil vendeur (Mes annonces, Booster, Espace pro) |
| `05-accueil.png` | Accueil (pros, récemment consultés, annonces récentes) |
| `06-espace-pro.png` | Espace professionnel → onglet Performances |
| `logo.png` | Icône de l'application (optionnel) |

Format conseillé : PNG, largeur 900–1200 px, portrait (ratio ~9:19).

Ensuite, passer `FLASH_SCREENSHOTS_READY` à `true` dans
[`src/data/projects.js`](../../../src/data/projects.js) — les vraies captures
remplacent alors automatiquement les aperçus dégradés.

> Astuce : si une image manque ou ne charge pas, le site retombe tout seul sur
> l'aperçu dégradé, sans rien casser.

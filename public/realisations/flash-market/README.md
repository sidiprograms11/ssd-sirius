# Captures Flash Market

Les 6 écrans sont en place. L'ordre ci-dessous est celui du site : les trois
premiers servent aussi de trio de téléphones en tête de fiche projet.

| Fichier | Écran |
| --- | --- |
| `01-recherche.jpg` | Recherche géolocalisée + « Parcourir par catégorie » |
| `05-accueil.jpg` | Accueil (pros, récemment consultés, annonces récentes) |
| `06-espace-pro.jpg` | Espace professionnel → onglet Performances |
| `04-profil-vendeur.jpg` | Profil vendeur (Mes annonces, Booster, Espace pro) |
| `03-choix-operateur.jpg` | Paiement → choix du pays / de l'opérateur |
| `02-paiement-orange-money.jpg` | Confirmation Orange Money |
| `logo.jpg` | Icône de l'application |

## Confidentialité

`04-profil-vendeur.jpg` a été retouchée : le numéro de téléphone personnel
visible sur le profil est flouté. **Ne pas remplacer ce fichier par la capture
d'origine** sans refaire le floutage — le site est public et indexable.

## Notes techniques

- Format : JPG ou PNG, portrait (~9:19), largeur 900–1200 px.
- Si une image manque ou ne charge pas, le site retombe automatiquement sur
  l'aperçu dégradé aux couleurs de Flash — rien ne casse.
- `FLASH_SCREENSHOTS_READY` (dans `src/data/projects.js`) permet de revenir
  aux aperçus dégradés pour toutes les captures d'un coup.

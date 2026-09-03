# Captures Flash Market

Fichiers actuellement utilisés par le site :

| Fichier | Écran | État |
| --- | --- | --- |
| `05-accueil.jpg` | Accueil (pros, récemment consultés, annonces récentes) | ✅ |
| `01-recherche.jpg` | Recherche géolocalisée + « Parcourir par catégorie » | ✅ |
| `04-profil-vendeur.jpg` | Profil vendeur (Mes annonces, Booster, Espace pro) | ✅ |
| `03-choix-operateur.jpg` | Paiement → choix du pays / de l'opérateur | ✅ |
| `02-paiement-orange-money.jpg` | Confirmation Orange Money | ✅ |
| `06-espace-pro.jpg` | Espace professionnel → onglet Performances | ❌ manquant |
| `logo.jpg` | Icône de l'application | ✅ |

## Ajouter l'écran manquant

Dépose `06-espace-pro.jpg` dans ce dossier, puis décommente la ligne
correspondante dans `screens` dans
[`src/data/projects.js`](../../../src/data/projects.js).

## Notes

- Format : JPG ou PNG, portrait (~9:19), largeur 900–1200 px.
- Si une image manque ou ne charge pas, le site retombe automatiquement sur
  l'aperçu dégradé aux couleurs de Flash — rien ne casse.
- `FLASH_SCREENSHOTS_READY` (dans `src/data/projects.js`) permet de revenir
  aux aperçus dégradés pour toutes les captures d'un coup.

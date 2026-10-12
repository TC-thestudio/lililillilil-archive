# lililillilil — archive du site (2022)

Reconstruction statique de l'ancien site de lililillilil (expositions immersives en Image Totale©), réalisé par Thierry Chopain / type8 studio.
Archive de portfolio : aucun build, aucun framework. Publier la racine du dépôt telle quelle (Netlify : *publish* = `.`).

## Structure

- `index.html` : accueil
- `createurs-annabelle-mauger-julien-baron/`, `image-totale/`, `mentions-legales/`
- `exposition-immersive/imagine-van-gogh|monet|da-vinci/`
- `assets/scripts/menu.js` : **menu unique** de tout le site (modifier les liens ici uniquement)
- `assets/css/main.css` : styles d'origine · `assets/css/fix.css` : ajustements de l'archive
- `assets/scripts/app.js` : script d'origine (Locomotive Scroll, Plyr, Embla)

## Notes

- Site à ouvrir via un serveur (Netlify, `python3 -m http.server`…), pas en double-cliquant sur le fichier : les vidéos YouTube intégrées affichent une erreur sur `file://`.
- Les pages sont en `noindex` (copie d'archive).

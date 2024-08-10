# M-Heberge.com Front-End

This is the official repository and code base for the M-Heberge.com front-end. This project is built using React.js and
Next.js.

## Getting Started

To get started, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

or

```bash
pnpm install
pnpm run dev
```

## Table of Contents

[Getting Started](#getting-started)
[Table of Contents](#table-of-contents)
[Contributing](#contributing)
[License](#license)
[Structure](#structure)
[Style Guide](#style-guide)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We will review
your changes and merge them if they are deemed appropriate.

### Actual Contributors

- Théo | Newlance (discord: pro_theo)

## License

This project is licensed under the MIT License - see the LICENSE root file for details.

## Structure

- public : Contains all the public files (images, etc.)
- src : Contains all the source code
    - ...
- node_modules : Contains all the dependencies

## Style Guide

I use the SMACSS conventions for the CSS. You can find more information about it [here](https://smacss.com/).

### Cheat Sheet

1. Base Rules (Règles de base)
   **Définition :** Les styles de base sont des styles globaux appliqués à des éléments HTML natifs sans classes ou
   identifiants spécifiques.
   Exemples : body, h1, p, a, etc.
   But : Fournir des styles par défaut cohérents pour les éléments HTML de base.
2. Layout Rules (Règles de mise en page)
   **Définition :** Ces règles s'appliquent aux grandes sections ou conteneurs du site, organisant les structures
   principales (entête, pied de page, barres latérales, etc.).
   Exemples : .header, .footer, .main-content, .sidebar.
   But : Définir la structure du site avec des conteneurs pour un positionnement global.
3. Module Rules (Règles de module)
   **Définition :** Les modules sont des sections réutilisables et spécifiques à des composants comme des cartes, des
   boutons, ou des formulaires.
   Exemples : .card, .button, .form-group.
   But : Créer des composants autonomes, faciles à réutiliser et à maintenir.
4. State Rules (Règles d'état)
   **Définition :** Les règles d'état définissent l'apparence des modules en fonction de certaines conditions ou
   interactions (état actif, survolé, ouvert, etc.).
   Exemples : .is-active, .is-hidden, .is-expanded.
   But : Modifier les styles des modules en fonction de l'état ou des interactions utilisateur.
5. Theme Rules (Règles de thème)
   **Définition :** Les règles de thème sont utilisées pour appliquer des variations de styles globales ou spécifiques à des
   modules, permettant de changer l'apparence générale du site.
   Exemples : .theme-dark, .theme-light, .theme-red.
   But : Faciliter la personnalisation du design via des variations de styles.

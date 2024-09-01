[![Netlify Status](https://api.netlify.com/api/v1/badges/13421fcf-e03c-4f6a-9ad1-1aa1ec13e0ba/deploy-status)](https://app.netlify.com/sites/astro-simple-blog/deploys) [![Run Build](https://github.com/dofbi/astro-simple-blog-theme/actions/workflows/build-test.yml/badge.svg)](https://github.com/dofbi/astro-simple-blog-theme/actions/workflows/build-test.yml)

# Astro Simple blog theme + Tina CMS

This Astro + Tina starter is based on the [simple blog theme for Astro](https://github.com/dofbi/astro-simple-blog-theme).

![screenshot](https://raw.githubusercontent.com/10mohi6/hugo-theme-simple-blog/master/images/screenshot.png)

## Live editing demo

![Live editing demo](/public/assets/simple-blog-with-tina.mp4)


https://github.com/user-attachments/assets/5437ab20-9a4f-47f7-8bd1-bc70a217f237

## Credits

This is built upon [the simple blog theme for Astro](https://github.com/dofbi/astro-simple-blog-theme).
Many thanks to @dofbi! If this template helped you, buy him a coffee.

<a href="https://www.buymeacoffee.com/51JrBtX" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>

## Features

- content
- pagination (improved)
- tags
- categories
- content management with Tina
- live editing with Tina

## 🧞 Commands

This project uses PNPM. To install it, run:

```sh
npm i -g pnpm
```

All commands are run from the root of the project, from a terminal:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

## Site Configuration

```json
{
  "site": {
    "language": "en",
    "title": "Astro Themes",
    "description": "<your site description>",
    "copyright": "© 2024 copyright text."
  },
  "links": [
    {
      "identifier": "about",
      "name": "About",
      "url": "/about/"
    }
  ],
  "settings": {
    "pagination": 6,
  }
}
```

## License

This template is [MIT](LICENSE) licensed.
